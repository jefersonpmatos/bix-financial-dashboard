import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { ThemeProvider } from "@/providers/theme-provider";
import { DashboardProvider } from "@/contexts/dashboard-context";
import { Container, Content } from "./styles";
import { Sidebar } from "@/components/ui/sidebar";
import { ChartArea, Home } from "lucide-react";
import { LogoutButton } from "@/components/logout-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bix Financial Dashboard",
  description: "A financial dashboard built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <DashboardProvider>
              <Container>
                <Sidebar
                  title="BIX Financial Dashboard"
                  items={[
                    {
                      id: "home",
                      label: "Home",
                      icon: <Home size={18} />,
                      path: "/",
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
            </DashboardProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <Toaster richColors />
      </body>
    </html>
  );
}
