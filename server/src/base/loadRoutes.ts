import { FastifyInstance, RouteOptions } from "fastify";
import fs from "fs";
import path from "path";

function getRouteUrl(filePath: string, baseDir: string): string {
  let routePath = filePath.replace(baseDir, "").replace(/\.ts$/, "").replace(/\\/g, "/");
  routePath = routePath.split("/").slice(0, -1).join("/");
  routePath = routePath.replace(/\[(\w+)\]/g, ":$1");
  return `/api${routePath}`;
}

export async function loadRoutes(fastify: FastifyInstance, directory: string): Promise<void> {
  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      await loadRoutes(fastify, itemPath);
    } else if (item.isFile() && item.name.endsWith(".ts")) {
      const routeModule = await import(itemPath);

      if (typeof routeModule.default === "function") {
        const method = item.name.replace(/\.ts$/, "").toUpperCase();
        const url = getRouteUrl(itemPath, path.join(__dirname, "../routes"));

        const routeOptions: RouteOptions = {
          method,
          url,
          handler: routeModule.default,
        };

        if (Array.isArray(routeModule.middlewares)) {
          routeOptions.preHandler = routeModule.middlewares;
        }

        if (routeModule.schema) {
          if (method === "GET" && routeModule.schema.body) {
            fastify.log.warn(`Body schema is not supported for GET routes: ${url}`);
            delete routeModule.schema.body;
          }
          routeOptions.schema = routeModule.schema;
        }

        fastify.route(routeOptions);
        fastify.log.info(`Route registered: ${method} ${url}`);
      }
    }
  }
}
