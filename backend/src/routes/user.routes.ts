// File: backend/routes/contact.routes.js
import express from "express";
import { UserController } from "@/controllers/User.controller";

export class UserRoutes {
  public router: express.Router;
  public userController = new UserController();
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post("/login", this.userController.loginUser);
    this.router.post("/register", this.userController.registerUser);
  }
}
