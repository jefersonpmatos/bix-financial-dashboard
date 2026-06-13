import { Container, Content } from "./styles";
import { Sidebar } from "@/components/ui/sidebar";
import { ChartArea, Home } from "lucide-react";
import { LogoutButton } from "@/components/logout-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Sidebar
        title="BIX Financial Dashboard"
        items={[
          {
            id: "home",
            label: "Home",
            icon: <Home size={18} />,
            path: "/home",
          },
          {
            id: "dashboard",
            label: "Dashboard",
            icon: <ChartArea size={18} />,
            path: "/dashboard",
          },
        ]}
        footer={<LogoutButton />}
      />

      <Content>{children}</Content>
    </Container>
  );
}
