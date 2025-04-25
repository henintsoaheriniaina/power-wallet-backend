import e from "express";
import {
  createTransaction,
  deleteTransaction,
  getUsersTransactionById,
  getUsersTransactions,
  updateTransaction,
} from "../controllers/transactionController";
import { requireAuth } from "../middlewares/authMiddleware";
import validateWithZod from "../utils/validateWithZod";
import {
  createTransactionSchema,
  updateTransactionSchema,
} from "../validators/transactionValidator";

const transactionsRoutes = e.Router();

// auth middleware
transactionsRoutes.use(requireAuth);

transactionsRoutes.get("/", getUsersTransactions);
transactionsRoutes.post(
  "/",
  validateWithZod(createTransactionSchema),
  createTransaction
);
transactionsRoutes
  .route("/:id")
  .get(getUsersTransactionById)
  .put(validateWithZod(updateTransactionSchema), updateTransaction)
  .delete(deleteTransaction);

export default transactionsRoutes;
