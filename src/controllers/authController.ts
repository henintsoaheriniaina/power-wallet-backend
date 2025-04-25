import bcrypt from "bcryptjs";
import type { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import config from "../config/config";
import User from "../models/user";

export const register = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    // check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400);
      throw new Error("User with this email already exists.");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user instance
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // create token
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "7d",
    });

    // store token to http only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: config.nodeEnv === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    res.json({ message: "Account created", user: { username, email } });
  }
);

export const login = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // existing user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("Invalid credentials");
    }

    // password match
    if (!(await bcrypt.compare(password, user.password))) {
      res.status(400);
      throw new Error("Invalid credentials");
    }

    // create token
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "7d",
    });

    // store token to http only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: config.nodeEnv === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    res.json({
      message: "Logged in successfully",
      user: { username: user.username, email: user.email },
    });
  }
);

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
