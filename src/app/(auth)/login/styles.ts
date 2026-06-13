import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 480px;

  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 64px;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #1d4ed8 100%
  );

  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroContent = styled.div`
  max-width: 500px;

  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    opacity: 0.9;
  }
`;

export const LoginSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const LoginCard = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  margin-bottom: 32px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DemoCredentials = styled.div`
  margin-top: 24px;

  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.background};

  span {
    display: block;
    margin-bottom: 8px;

    font-size: 0.875rem;
    font-weight: 600;
  }

  p {
    margin: 4px 0;
    font-size: 0.875rem;
  }
`;
