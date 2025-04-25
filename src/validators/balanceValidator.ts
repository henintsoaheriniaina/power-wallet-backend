import { z } from "zod";

export const updateBalanceSchema = z.object({
  amount: z.number().positive(),
  transactionType: z.enum(["expense", "income"]),
});
