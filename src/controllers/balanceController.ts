import type { Response } from "express";
import expressAsyncHandler from "express-async-handler";
import type { AuthRequest } from "../middlewares/authMiddleware";
import Balance from "../models/balance";

export const getBalance = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const balance = await Balance.findOne({ user: req.userId });
    if (!balance) {
      const newBalance = await Balance.create({ user: req.userId, amount: 0 });
      res
        .status(201)
        .json({ message: "Balance created successfully", balance: newBalance });
    } else {
      res.status(200).json({ balance });
    }
  }
);

export const updateBalance = expressAsyncHandler(
  async (req: AuthRequest, res: Response) => {
    const { amount, transactionType } = req.body;
    let balance = await Balance.findOne({ user: req.userId });
    if (!balance) {
      balance = await Balance.create({ user: req.userId, amount: 0 });
    }
    if (transactionType === "expense") {
      balance.amount -= amount;
    } else if (transactionType === "income") {
      balance.amount += amount;
    } else {
      res.status(400).json({ message: "Invalid transaction type" });
    }
    await balance.save();
    res.status(200).json({ message: "Balance updated successfully", balance });
  }
);
