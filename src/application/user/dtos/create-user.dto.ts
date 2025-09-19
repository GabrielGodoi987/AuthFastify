import * as zod from "zod";

export const CreateUser = zod.object({
  name: zod.string().min(3).max(50),
  email: zod.email(),
  password: zod.string().min(6).max(50),
});

export type CreateUserSchema = zod.infer<typeof CreateUser>;
