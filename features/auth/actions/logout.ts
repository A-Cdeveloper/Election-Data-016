"use server";

import { cookies } from "next/headers";
import { LogoutActionResponseType } from "../types";

export const logoutAction = async (): Promise<LogoutActionResponseType> => {
  const cookieStore = await cookies();
  cookieStore.delete("auth_session");
  return { success: true, message: "Logout successful" };
};
