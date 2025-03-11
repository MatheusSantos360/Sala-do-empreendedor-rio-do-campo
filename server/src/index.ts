import fastify from "fastify";
import cors from "@fastify/cors"
import path from "path";
import { loadRoutes } from "./base/loadRoutes";
import { connectDB } from "./utils/connectDB";
import { config } from "dotenv";

config();

const app = fastify({ logger: true });
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
})

const start = async () => {
  try {
    await loadRoutes(app, path.join(__dirname, "routes"));
    
    await connectDB(process.env.DBTOKEN!);
    await app.listen({ port: 3001 });
    app.log.info(`Server running - http://localhost:3001`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
