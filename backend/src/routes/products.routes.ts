import { Router } from "express";
import multer from "multer";
import { ProductController } from "@/controllers/Product.controller";
const upload = multer({ storage: multer.memoryStorage() });
export class ProductRoutes {
    public router: Router;
    public productController = new ProductController();
    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get("/products", this.productController.getAll);
        this.router.post("/create-product", multer({ storage: multer.memoryStorage() }).single("file"), this.productController.create);
    }

}

