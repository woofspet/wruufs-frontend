// File: backend/models/slide.model.ts
import { Schema, model, Document } from "mongoose";

export interface ISlide extends Document {
  heading: string;
  text: string;
  image: string; // store image URL (already in your DB or S3)
  bgClass: string; // for CSS background
}

const slideSchema = new Schema<ISlide>(
  {
    heading: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    bgClass: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Slide = model<ISlide>("Slide", slideSchema);
