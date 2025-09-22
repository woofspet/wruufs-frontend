import { Request, Response } from "express";
import { User } from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // keep in .env
const JWT_EXPIRES_IN = "7d";

// Helper to generate JWT
const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export class authController {
  public registerUser = async (req: Request, res: Response) => {
    try {
      const { email, password, firstName, lastName, phone, avatarUrl } =
        req.body;

      // Check if user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const fullName = `${firstName} ${lastName}`;
      const newUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        fullName,
        phone,
        avatarUrl,
        role: "user",
      });
      await newUser.save();

      // Generate JWT
      const token = generateToken(
        (newUser._id as unknown as string).toString()
      );

      // Response
      const { password: _, ...userWithoutPassword } = newUser.toObject();
      return res.status(201).json({ ...userWithoutPassword, token });
    } catch (err) {
      console.error("Register error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  public loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = (await User.findOne({ email })) as InstanceType<
        typeof User
      > & { _id: string };
      if (!user)
        return res.status(400).json({ message: "Invalid credentials" });

      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.status(400).json({ message: "Invalid credentials" });

      // Generate JWT
      const token = generateToken(user._id.toString());

      // Response
      const { password: _, ...userWithoutPassword } = user.toObject();
      return res.status(200).json({ ...userWithoutPassword, token });
    } catch (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  public getProfile = async (req: Request, res: Response) => {
    try {
      const userId = (req as any).userId;
      const user = await User.findById(userId).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.status(200).json(user);
    } catch (err) {
      console.error("Get profile error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
};