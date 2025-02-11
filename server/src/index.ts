import fastify from "fastify";
import path from "path";
import { loadRoutes } from "./base/loadRoutes";

const app = fastify({ logger: true });

const start = async () => {
  try {
    await loadRoutes(app, path.join(__dirname, "routes"));

    await app.listen({ port: 3000 });
    app.log.info(`Servidor rodando em http://localhost:3000`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
