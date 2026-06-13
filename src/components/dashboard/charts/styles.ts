import styled from "styled-components";

export const ChartCard = styled.div`
  width: 100%;
  height: 360px;

  padding: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};

  box-shadow: ${({ theme }) => theme.shadows.sm};

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
