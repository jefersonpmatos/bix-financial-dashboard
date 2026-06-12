import { InputHTMLAttributes, forwardRef } from "react";

import { StyledInput } from "./input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...props }, ref) => {
    return <StyledInput ref={ref} $hasError={hasError} {...props} />;
  },
);

Input.displayName = "Input";
