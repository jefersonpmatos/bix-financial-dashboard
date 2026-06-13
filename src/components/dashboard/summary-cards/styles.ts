import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{ $color?: string }>`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: all 0.2s ease;

  border-color: ${({ $color }) => $color || "#2563eb"};
  box-shadow: 0 4px 12px ${({ $color }) => $color || "#2563eb"}20;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ $color }) => $color || "#2563eb"}15;
  color: ${({ $color }) => $color || "#2563eb"};
`;

export const Title = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

export const Value = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;
