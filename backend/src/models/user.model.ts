// File: backend/models/user.model.ts
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  avatarUrl: string;
  role: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 8,
      validate: {
        validator: function (v: string) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/.test(
            v
          );
        },
        message: (props: any) =>
          `${props.value} is not a valid password! It must be 6-8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.`,
      },
    },
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
    phone: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Invalid phone number"],
    },
    avatarUrl: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

// 👇 Pre-save hook to set fullName automatically
userSchema.pre("save", function (next) {
  if (this.firstName && this.lastName) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  next();
});

// 👇 Pre-update hook to update fullName if firstName/lastName changes
userSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate() as Partial<IUser>;
  if (update.firstName || update.lastName) {
    const firstName =
      update.firstName ??
      (this as any)._update.firstName ??
      (this as any)._conditions.firstName;
    const lastName =
      update.lastName ??
      (this as any)._update.lastName ??
      (this as any)._conditions.lastName;

    if (firstName || lastName) {
      update.fullName = `${firstName || ""} ${lastName || ""}`.trim();
      this.setUpdate(update);
    }
  }
  next();
});

export const User = model<IUser>("User", userSchema);
