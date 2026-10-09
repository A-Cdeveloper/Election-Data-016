import { z } from "zod";

export const formatZodError = (error: z.ZodError): string[] => {
  return error.issues.map((issue) => issue.message);
};
