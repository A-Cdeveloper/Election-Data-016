import { findUserById } from "../queries";
import { getSession } from "./session";
import "server-only";

// Server-only function that returns the current authenticated user
export const getCurrentUser = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }
  const user = await findUserById(session.userId);
  return user;
};
