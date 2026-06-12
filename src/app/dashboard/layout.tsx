"use client";

import { Home } from "lucide-react";
import { Container, Content } from "./styles";
import { Sidebar } from "@/components/ui/sidebar";
import { LogoutButton } from "@/components/logout-button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Sidebar
        title="BIX Financial Dashboard"
        items={[
          {
            id: "home",
            label: "Dashboard",
            icon: <Home size={18} />,
          },
        ]}
        footer={<LogoutButton />}
      />

      <Content>{children}</Content>
    </Container>
  );
}
