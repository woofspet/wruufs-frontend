import { Request, Response } from "express";
import { Product } from "@/models/Product.model";
import { S3Service } from "@/services/S3.service";

export class ProductController {
   async getAll(req: Request, res: Response) {
    try {
      // const { id } = req.query;

      // if (id) {
      //   const product = await Product.findById(id);
      //   if (!product)
      //     return res.status(404).json({ error: "Product not found" });
      //   return res.json(product);
      // }

      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

   async create(req: Request, res: Response) {
    try {
      // Check all mandatory fields
      const { name, description, ingredients } = req.body;
      if (!name || !description || !ingredients) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "Image is required" });
      }

      const file = req.file.buffer;
      const filename = `products/${Date.now()}_${req.file.originalname}`;
      const mimetype = req.file.mimetype;

      // Upload to S3
      const imageUrl = await S3Service.uploadFile(file, filename, mimetype);

      // Create product in DB
      const product = new Product({
        name,
        description,
        ingredients,
        image: imageUrl,
      });
      await product.save();

      res.status(201).json(product);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: "Invalid data" });
    }
  }
}