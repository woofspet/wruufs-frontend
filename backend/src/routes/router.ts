import express from "express";
const app = express();
import { ProductRoutes } from "@/routes/products.routes";
import { SlideRoutes } from "@/routes/slide.routes";
import { UserRoutes } from "@/routes/user.routes";

export class AppRouter {
  public router: express.Router;
  public productRoutes = new ProductRoutes();
  public slideRoutes = new SlideRoutes();
  public userRoutes = new UserRoutes();

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.use("/product", this.productRoutes.router);
    this.router.use("/slide", this.slideRoutes.router);
    this.router.use("/user", this.userRoutes.router);
  }
}
