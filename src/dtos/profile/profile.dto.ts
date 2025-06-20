import { z } from "zod";

export const DepositSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  gateway: z.string(),
  returnUrl: z.string(),
});
export type DepositItem = z.infer<typeof DepositSchema>;

// export const BookingHistorySchema = z.object({
//   id: z.string().uuid(),
//   totalAmount: z.number(),
//   planName: z.string(),
//   status: z.string(),
//   mentor: z.string(),
//   createdAt: z.string().datetime(),
// });
// export type BookingHistoryItem = z.infer<typeof BookingHistorySchema>;
// export const BookingActivitySchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   content: z.string(),
//   type: z.string(), 
//   status: z.string(), 
//   startAt: z.string().datetime(), 
//   endAt: z.string().datetime(),  
//   meetingLink: z.string(),
//   note: z.string(),
// });
// export type BookingActivityItem = z.infer<typeof BookingActivitySchema>;

export const BookingActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  content: z.string(),
  type: z.string(),
  status: z.string(),
  startAt: z.string(),
  endAt: z.string(),
  meetingLink: z.string(),
  note: z.string(),
});

export const BookingHistorySchema = z.object({
  id: z.string(),
  totalAmount: z.number(),
  planName: z.string(),
  status: z.string(),
  mentor: z.object({
    id: z.string(),
    name: z.string(),
  }).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  activities: z.array(BookingActivitySchema),
});
export type BookingHistoryItem = z.infer<typeof BookingHistorySchema>;
export type BookingActivityItem = z.infer<typeof BookingActivitySchema>;