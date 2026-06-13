import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: auto;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.surface};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 0.875rem;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Td = styled.td`
  padding: 12px;
  font-size: 0.875rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Badge = styled.span<{ $type: "deposit" | "withdraw" }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;

  color: white;

  background: ${({ $type, theme }) =>
    $type === "deposit" ? theme.colors.success : theme.colors.danger};
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SearchInput = styled.input`
  padding: 8px 12px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  outline: none;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  padding: 12px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 6px 10px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};

  color: ${({ $active, theme }) => ($active ? "#fff" : theme.colors.text)};

  cursor: pointer;
`;
