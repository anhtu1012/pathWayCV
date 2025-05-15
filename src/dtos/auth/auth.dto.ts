import { z } from "zod";

/**
 * Schema and type for permision auth keycloack
 */
export const UserInforSchema = z.object({
  id: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  createdTimestamp: z.number(),
  enabled: z.boolean(),
  totp: z.boolean(),
  fullname: z.string(),
});

export const GroupSchema = z.object({
  id: z.string(),
  required: z.boolean(),
});

export const ScopeSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const PolicySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  resources: z.array(z.string()),
  scopes: z.array(z.string()),
  logic: z.string(),
  decisionStrategy: z.string(),
  config: z.object({}),
});

export const allowedScopesSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const PermisionLoginSchema = z.array(
  z.object({
    scopes: z.array(ScopeSchema),
    policies: z.array(
      z.object({
        policy: PolicySchema,
      })
    ),
    allowedScopes: z.array(allowedScopesSchema),
  })
);

export type PermisionLoginItem = z.infer<typeof PermisionLoginSchema>;

export const PermisionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  logic: z.string(),
  decisionStrategy: z.string(),
  scope: z.array(ScopeSchema),
  menu: z.object({
    name: z.string(),
    _id: z.string(),
    parent: z.string(),
  }),
  group: z.array(GroupSchema),
});

export type PermisionItem = z.infer<typeof PermisionSchema>;