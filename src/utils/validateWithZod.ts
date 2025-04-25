import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

const validateWithZod =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      console.log(`err : ${result.error}`);
      res.status(400);
      throw new Error(`Validation error : ${result.error}`);
    }
    req.body = result.data;
    next();
  };
export default validateWithZod;
