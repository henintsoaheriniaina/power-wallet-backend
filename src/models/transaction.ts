import type { Document, ObjectId } from "mongoose";
import mongoose, { Schema } from "mongoose";

export interface ITransaction extends Document {
  user: ObjectId;
  amount: number;
  type: "income" | "expense";
  description?: string;
  date: Date;
}

const transactionSchema = new mongoose.Schema<ITransaction>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    description: {
      type: String,
    },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Transaction = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);
export default Transaction;
