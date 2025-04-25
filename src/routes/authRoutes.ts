import { Router } from "express";
import { login, logout, register } from "../controllers/authController";
import { requireAuth } from "../middlewares/authMiddleware";
import validateWithZod from "../utils/validateWithZod";
import { loginSchema, registerSchema } from "../validators/authValidator";

const authRoutes = Router();

authRoutes.post("/register", validateWithZod(registerSchema), register);
authRoutes.post("/login", validateWithZod(loginSchema), login);
authRoutes.delete("/logout", requireAuth, logout);

export default authRoutes;
