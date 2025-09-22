import { Request, Response } from "express";
import { User } from "@/models/user.model"; // Mongoose model
import bcrypt from "bcrypt";

export class UserController {
 public registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName, phone, avatarUrl } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create full name automatically
    const fullName = `${firstName} ${lastName}`;

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      fullName,
      phone,
      avatarUrl,
      role: "user", // default role
    });

    // Save user to DB
    await newUser.save();

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    return res.status(201).json(userWithoutPassword);
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

public loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.status(200).json(userWithoutPassword);
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
};
