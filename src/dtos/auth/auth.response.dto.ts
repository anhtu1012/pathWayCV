import { z } from "zod";
import {
  PermisionLoginSchema,
  PermisionSchema,
  UserInforSchema,
} from "./auth.dto";

/**
 * Schema and type for response auth login
 */
export const UserResponseLoginSchema = z.object({
  message: z.string(),
  ok: z.boolean(),
  permission: PermisionLoginSchema,
  user_info: UserInforSchema,
});

export type UserResponseLoginItem = z.infer<typeof UserResponseLoginSchema>;

export const UserResponseLogoutSchema = z.object({
  is_clear_cookie: z.boolean(),
  message: z.string(),
  ok: z.boolean(),
});

export type UserResponseLogoutItem = z.infer<typeof UserResponseLogoutSchema>;

/**
 * Schema and type for response auth registration
 */
export const UserResponseRegisterSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  user_id: z.string().optional(),
});

export type UserResponseRegisterItem = z.infer<
  typeof UserResponseRegisterSchema
>;

/**
 * Schema and type for response auth get permision
 */

export const PermisionResponseGetSchema = z.object({
  message: z.string(),
  ok: z.boolean(),
  payload: z.array(PermisionSchema),
});

export type PermisionResponseGetItem = z.infer<
  typeof PermisionResponseGetSchema
>;
