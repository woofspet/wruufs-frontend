import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  ingredients: string;
  category: string;
  image: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true ,unique: true, trim: true, match: [/^[a-zA-Z0-9\s]+$/, 'Name should contain only letters, numbers and spaces'] },
    description: { type: String, required: true, trim: true , match: [/^[a-zA-Z0-9\s,.'"-]+$/, 'Description should contain only letters, numbers, spaces and basic punctuation'] },
    ingredients: { type: String, required: true , trim: true , match: [/^[a-zA-Z0-9\s,.'"-]+$/, 'Ingredients should contain only letters, numbers, spaces and basic punctuation'] },
    category: { type: String, required: true , trim: true, enum: ['food', 'supplement', 'accessory', 'grooming', 'other','logo'], default: 'other' },
    image: { type: String, required: true, trim: true , match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/, 'Invalid image URL'] },
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
