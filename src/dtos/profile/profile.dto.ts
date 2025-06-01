import { z } from "zod";

export const DepositSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  gateway: z.string(),
  returnUrl: z.string(),
});
export type DepositItem = z.infer<typeof DepositSchema>;
