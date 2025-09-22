
import { Schema, model, Document } from "mongoose";

export interface ISubscriber extends Document {
  email: string;

}

const subscriberSchema = new Schema<ISubscriber>(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const Subscriber = model<ISubscriber>("Subscriber", subscriberSchema);


