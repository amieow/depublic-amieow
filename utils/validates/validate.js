import { z } from "zod";

const searcyQuerySchema = z.object({
  query: z.string().min(1).max(20),
});

export { searcyQuerySchema }