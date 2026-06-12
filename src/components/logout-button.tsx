"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/actions/auth/logout";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
    router.refresh();
  };

  return <button onClick={handleLogout}>Sair</button>;
}
