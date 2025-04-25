import e from "express";
import { getBalance, updateBalance } from "../controllers/balanceController";
import { requireAuth } from "../middlewares/authMiddleware";
import validateWithZod from "../utils/validateWithZod";
import { updateBalanceSchema } from "../validators/balanceValidator";

const balanceRoutes = e.Router();

balanceRoutes.use(requireAuth);
balanceRoutes.get("/", getBalance);
balanceRoutes.put("/", validateWithZod(updateBalanceSchema), updateBalance);
export default balanceRoutes;
