import styled from "styled-components";

interface ContainerProps {
  $collapsed: boolean;
}

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.aside<ContainerProps>`
  width: ${({ $collapsed }) => ($collapsed ? "0px" : "260px")};

  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: width 0.25s ease;
  height: 100vh;

  border-right: ${({ theme, $collapsed }) =>
    $collapsed ? "none" : `1px solid ${theme.colors.border}`};

  background: ${({ theme }) => theme.colors.surface};
`;

export const ToggleButton = styled.button<ContainerProps>`
  position: absolute;

  top: 16px;
  right: ${({ $collapsed }) => ($collapsed ? "-48px" : "-20px")};

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.surface};

  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  transition: all 0.25s ease;

  z-index: 100;
`;

export const Header = styled.div`
  height: 72px;

  display: flex;
  align-items: center;

  padding: 0 24px;

  font-weight: 600;
  font-size: 16px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Navigation = styled.nav`
  flex: 1;

  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.button`
  height: 44px;

  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 12px;

  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  background: transparent;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Footer = styled.div`
  padding: 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;
