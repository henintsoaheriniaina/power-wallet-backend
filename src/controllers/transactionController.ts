import type { Response } from "express";
import expressAsyncHandler from "express-async-handler";
import type { AuthRequest } from "../middlewares/authMiddleware";

export const getUsersTransactions = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    res.json({ message: "Get User's transactions", userId: req.userId });
  }
);

export const createTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    res.json({ message: "Create transaction", userId: req.userId });
  }
);

export const getUsersTransactionById = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    res.json({
      message: "Get User's transaction by Id",
      userId: req.userId,
      transactionId: id,
    });
  }
);

export const updateTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    res.json({
      message: "Update User's transaction by Id",
      userId: req.userId,
      transactionId: id,
    });
  }
);

export const deleteTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    res.json({
      message: "Delete User's transaction by Id",
      userId: req.userId,
      transactionId: id,
    });
  }
);
