import mongoose, { Schema, type Document, type ObjectId } from "mongoose";

export interface IBalance extends Document {
  amount: number;
  user: ObjectId;
}

const balanceSchema = new Schema<IBalance>(
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
  },
  { timestamps: true }
);

const Balance = mongoose.model<IBalance>("Balance", balanceSchema);

export default Balance;
