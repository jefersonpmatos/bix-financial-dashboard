"use server";

import { cookies } from "next/headers";

interface LoginInput {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginInput) {
  if (email !== "admin@bix.com" || password !== "123456") {
    return {
      success: false,
      message: "Credenciais inválidas",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("token", "fake-jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return {
    success: true,
  };
}
