import type { Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import type { AuthRequest } from "../middlewares/authMiddleware";
import Transaction from "../models/transaction";

export const getUsersTransactions = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const transactions = await Transaction.find({ user: req.userId });
    res.status(200).json({ transactions });
  }
);

export const createTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { amount, type, description, date } = req.body;
    const transaction = await Transaction.create({
      user: req.userId,
      amount,
      type,
      description,
      date: date ? new Date(date) : new Date(),
    });

    res.status(201).json({
      message: "Transaction created successfully",
      transaction,
    });
  }
);

export const getUsersTransactionById = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    const transaction = await Transaction.findOne({
      _id: id,
      user: req.userId,
    });

    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    res.json({
      transaction,
    });
  }
);

export const updateTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    const transaction = await Transaction.findOne({
      _id: id,
      user: req.userId,
    });

    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found");
    }
    const { amount, type, description, date } = req.body;

    transaction.amount = amount ?? transaction.amount;
    transaction.type = type ?? transaction.type;
    transaction.description = description ?? transaction.description;
    transaction.date = date ? new Date(date) : transaction.date;

    const updatedTransaction = await transaction.save();

    res.status(200).json({
      message: "Transaction updated successfully",
      transaction: updatedTransaction,
    });
  }
);

export const deleteTransaction = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    const transaction = await Transaction.findOne({
      _id: id,
      user: req.userId,
    });

    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    await transaction.deleteOne();

    res.status(200).json({
      message: "Transaction deleted successfully",
    });
  }
);
