import type { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import type { ZodSchema } from "zod";

const validateWithZod = (schema: ZodSchema) => {
  return expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        res.status(400);
        throw new Error("Validation error");
      }
      req.body = result.data;
      next();
    }
  );
};

export default validateWithZod;
