import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { ObjectId } from "mongoose";

export interface AuthRequest extends Request {
  userId?: ObjectId;
}

export const requireAuth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
    throw new Error("Token not found");
  }
  try {
    const decoded = jwt.decode(token);
    if (decoded && typeof decoded !== "string" && "userId" in decoded) {
      req.userId = decoded.userId;
      next();
    } else {
      res.status(401);
      throw new Error("Invalid token ");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Invalid token");
  }
};
