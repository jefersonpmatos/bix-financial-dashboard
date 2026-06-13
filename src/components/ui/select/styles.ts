import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  height: 48px;

  padding: 0 16px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
