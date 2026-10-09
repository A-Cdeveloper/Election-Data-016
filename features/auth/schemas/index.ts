import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Neispravan email"),
  password: z.string().min(8, "Lozinka mora biti najmanje 8 znakova"),
});

export type LoginInputType = z.infer<typeof loginSchema>;
