import { Router } from "express";
import { register } from "../controllers/authController";
import validateWithZod from "../utils/validateWithZod";
import { registerSchema } from "../validators/authValidator";

const userRoutes = Router();

userRoutes.post("/register", validateWithZod(registerSchema), register);

export default userRoutes;
