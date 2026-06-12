import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return {
    isAuthenticated: !!token,
    token: token?.value,
  };
}
