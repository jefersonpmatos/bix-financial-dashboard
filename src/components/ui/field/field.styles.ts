import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;

  color: ${({ theme }) => theme.colors.danger};
`;
