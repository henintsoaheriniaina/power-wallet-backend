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
  console.log("Tonga ato");

  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log(`Error: ${err.stack || err}`);

  res.status(statusCode).json({
    error: message,
    ...(config.nodeEnv === "development" && { stack: err.stack }),
  });
};
