import { Router } from "express";
import { login, logout, register } from "../controllers/authController";
import validateWithZod from "../utils/validateWithZod";
import { loginSchema, registerSchema } from "../validators/authValidator";

const userRoutes = Router();

userRoutes.post("/register", validateWithZod(registerSchema), register);
userRoutes.post("/login", validateWithZod(loginSchema), login);
userRoutes.delete("/logout", logout);

export default userRoutes;
