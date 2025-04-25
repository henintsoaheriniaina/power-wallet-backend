import type { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, _: Response, next: NextFunction) => {
  console.log(`[${req.method}] ---------- ${req.url}`);
  next();
};
export default logMiddleware;
