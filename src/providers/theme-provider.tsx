"use client";

import { ThemeProvider as StyledProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global-style";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
}
