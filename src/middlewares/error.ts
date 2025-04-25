import type { Request, Response } from "express";

interface CustomError extends Error {
  statusCode?: number;
  message: string;
  stack?: string;
}

const errorHandler = (err: CustomError, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`Error: ${err.stack || err}`);

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
export default errorHandler;
