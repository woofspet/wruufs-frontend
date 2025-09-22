import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppDataSource } from "./config/connection";
import { productRoutes } from "./routes/products.routes";

const server = Fastify({ logger: true });

server.register(cors, { origin: "*" });

// Connect DB
AppDataSource.initialize()
  .then(() => console.log("Postgres Connected"))
  .catch((err) => console.error("DB Error: ", err));

// Register routes
server.register(productRoutes, { prefix: "/api/products" });

const start = async () => {
  try {
    await server.listen({ port: 5000 });
    console.log("Server running on http://localhost:5000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
