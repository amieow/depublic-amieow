import { UserSchema } from "./default";
import { z } from "zod";

export const CustomerSchema = UserSchema.and(
  z.object({
    tickets: z.string().array().optional(),
    minat: z.string().array(),
    role: z.enum(["customer"]),
  }),
);