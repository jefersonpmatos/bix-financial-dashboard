"use client";

import {
  Container,
  HeroContent,
  HeroSection,
  LoginCard,
  LoginSection,
} from "./styles";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <h1>Financial Dashboard</h1>

          <p>
            Analyze balances, revenue, expenses and transaction history through
            interactive dashboards.
          </p>
        </HeroContent>
      </HeroSection>

      <LoginSection>
        <LoginCard>{children}</LoginCard>
      </LoginSection>
    </Container>
  );
}
