import bcrypt from "bcryptjs";

export const comparePassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
