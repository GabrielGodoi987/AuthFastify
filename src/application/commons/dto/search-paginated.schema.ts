import z from "zod";

export const queryDto = z.object({
  page: z.string().transform(Number).default(1),
  limit: z.string().transform(Number).default(10),
})

export type QuerySchmea = z.infer<typeof queryDto>;