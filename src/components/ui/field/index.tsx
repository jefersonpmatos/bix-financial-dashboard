import { ReactNode } from "react";

import { Container, ErrorMessage, Label } from "./field.styles";

interface FieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}

export function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <Container>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}

      {children}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
