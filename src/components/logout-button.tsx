"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/actions/auth/logout";
import { Button } from "./ui/button";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
    router.refresh();
  };

  return <Button onClick={handleLogout}>Sair</Button>;
}
