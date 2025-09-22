import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/connection";
import { AppRouter } from "./src/routes/router";

// Load environment variables
dotenv.config();

export class App {
  public app: Application;
  public env: string;
  public port: number;
  public router: AppRouter;

  constructor() {
    this.app = express();
    this.env = process.env.NODE_ENV || "development";
    this.port = Number(process.env.PORT) || 4000;
    this.router = new AppRouter();

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.use("/api", this.router.router);
  }

  private async connectToDatabase() {
    try {
      await connectDB();
      console.log("Connected to the database");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1); // stop the server if DB fails
    }
  }

  public async listen() {
    await this.connectToDatabase(); // ensure DB is connected first
    this.app.listen(this.port, () => {
      console.log(
        `🚀 Server running at http://localhost:${this.port} (${this.env})`
      );
    });
  }
}
