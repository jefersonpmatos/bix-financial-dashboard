import styled from "styled-components";

interface StyledInputProps {
  $hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 48px;

  padding: 0 16px;

  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.border};

  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    outline: none;

    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.primary};

    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError ? `${theme.colors.danger}20` : `${theme.colors.primary}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background: ${({ theme }) => theme.colors.background};
  }
`;
