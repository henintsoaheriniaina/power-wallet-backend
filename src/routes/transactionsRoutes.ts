import e from "express";
import {
  createTransaction,
  deleteTransaction,
  getUsersTransactionById,
  getUsersTransactions,
  updateTransaction,
} from "../controllers/transactionController";
import { requireAuth } from "../middlewares/authMiddleware";

const transactionsRoutes = e.Router();

// auth middleware
transactionsRoutes.use(requireAuth);

transactionsRoutes.get("/", getUsersTransactions);
transactionsRoutes.post("/", createTransaction);
transactionsRoutes
  .route("/:id")
  .get(getUsersTransactionById)
  .put(updateTransaction)
  .delete(deleteTransaction);

export default transactionsRoutes;
