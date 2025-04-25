import type { NextFunction, Request, Response } from "express";
import config from "../config/config";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  throw new Error(`Not found --- ${req.originalUrl}`);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    error: message,
    ...(config.nodeEnv === "development" && { stack: err.stack }),
  });
};
