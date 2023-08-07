import { z } from "zod";

export const loginResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    createdAt: z.date(),
  }),
});
export const loggedResponseSchema = z.object({
  token: z.string(),
  loggedUser: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    createdAt: z.date(),
  }),
});
