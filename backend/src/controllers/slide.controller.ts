// File: backend/controllers/slide.controller.ts
import { Request, Response } from "express";
import { Slide } from "@/models/slides.model";

export class SlideController {
   public async getAll(req: Request, res: Response) {
    try {
      const slides = await Slide.find().sort({ createdAt: 1 });
      res.json(slides);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch slides" });
    }
  }

   public async create(req: Request, res: Response) {
    try {
      const slide = new Slide(req.body);
      await slide.save();
      res.status(201).json(slide);
    } catch (error) {
      res.status(400).json({ error: "Failed to create slide" });
    }
  }
}
