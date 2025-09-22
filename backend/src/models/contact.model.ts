// File: backend/models/lead.model.ts
import mongoose, { Document } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  message: string;
}

const contactSchema = new mongoose.Schema<IContact>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      match: [/^[a-zA-Z]+$/, "First name should contain only letters"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      match: [/^[a-zA-Z]+$/, "Last name should contain only letters"],
    },
    fullName: {
      type: String,
      trim: true,
      match: [
        /^[a-zA-Z\s]+$/,
        "Full name should contain only letters and spaces",
      ],
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9\s,.'"!?-]+$/,
        "Message should contain only letters, numbers, spaces and basic punctuation",
      ],
    },
  },
  { timestamps: true }
);

// 👇 Pre-save hook to set fullName automatically
contactSchema.pre("save", function (next) {
  if (this.firstName && this.lastName) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  next();
});

export default mongoose.model<IContact>("Contact", contactSchema);
