import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "@/models/user.model";
import jwt from "jsonwebtoken";

const router = Router();

// Configure Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists
        let user = await User.findOne({ email: profile.emails?.[0].value });
        if (!user) {
          user = new User({
            email: profile.emails?.[0].value,
            firstName: profile.name?.givenName || "",
            lastName: profile.name?.familyName || "",
            fullName: `${profile.name?.givenName} ${profile.name?.familyName}`,
            password: "", // not needed for Google users
            avatarUrl: profile.photos?.[0].value,
            role: "user",
            phone: "",
          });
          await user.save();
        }
        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);

// Auth routes
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req: any, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    // Redirect with token
    res.redirect(`/success?token=${token}`);
  }
);

export { router as authRoutes };
