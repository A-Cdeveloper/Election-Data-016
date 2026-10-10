import bcrypt from "bcryptjs";
import "server-only";

export const comparePassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
