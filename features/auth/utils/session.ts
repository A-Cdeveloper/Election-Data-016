import { jwtDecrypt, EncryptJWT } from "jose";
import { cookies } from "next/headers";
import "server-only";

const secret = process.env.AUTH_SECRET;

if (!secret) {
  throw new Error("AUTH_SECRET is not defined");
}

const secretKey = Buffer.from(secret, "hex");

if (secretKey.length !== 32) {
  throw new Error("AUTH_SECRET must contain 64 hexadecimal characters");
}

export type SessionPayload = {
  userId: number;
};

export const encryptSession = async (payload: SessionPayload) => {
  return new EncryptJWT(payload)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .encrypt(secretKey);
};

export const decryptSession = async (token: string) => {
  try {
    const { payload } = await jwtDecrypt<SessionPayload>(token, secretKey);
    return payload;
  } catch {
    return null;
  }
};

export const getSession = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_session")?.value;
  if (!token) {
    return null;
  }
  return decryptSession(token);
};
