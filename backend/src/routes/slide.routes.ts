// File: backend/routes/slide.routes.ts
import { Router } from "express";
import { SlideController } from "@/controllers/slide.controller";

export class SlideRoutes{
    public router: Router;
    public slideController = new SlideController(); 

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/slides", this.slideController.getAll);
        this.router.post("/slides", this.slideController.create);
    }
}

