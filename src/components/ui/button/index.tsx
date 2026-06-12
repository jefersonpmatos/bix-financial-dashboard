import { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
