"use server";

import { findUserByEmail } from "../queries";
import { loginSchema } from "../schemas";
import { LoginActionResponseType } from "../types";
import { formatZodError } from "../utils/errorHandler";
import { comparePassword } from "../utils/password";
import { cookies } from "next/headers";
import { encryptSession } from "../utils/session";

export const loginAction = async (
  _prevState: LoginActionResponseType,
  formData: FormData
): Promise<LoginActionResponseType> => {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: formatZodError(validatedFields.error),
    };
  }

  const user = await findUserByEmail(validatedFields.data.email);

  if (!user) {
    return {
      success: false,
      error: ["Neispravan email ili lozinka"],
      email: validatedFields.data.email,
    };
  }
  const isPasswordValid = await comparePassword(
    validatedFields.data.password,
    user.passwordHash
  );

  if (!isPasswordValid) {
    return {
      success: false,
      error: ["Neispravan email ili lozinka"],
      email: validatedFields.data.email,
    };
  }

  const session = await encryptSession({
    userId: user.id,
  });

  const cookieStore = await cookies();

  cookieStore.set("auth_session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: true, message: "Login successful" };
};
