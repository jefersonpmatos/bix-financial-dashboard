import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.primary};
  color: white;

  font-size: 0.95rem;
  font-weight: 600;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
