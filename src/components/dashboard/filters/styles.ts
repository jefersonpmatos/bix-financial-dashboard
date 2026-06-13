import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #64748b;
  }

  /* Garante que os inputs/selects herdem a largura total do grid */
  input,
  select {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background-color: #ffffff;
    color: #334155;
    font-size: 0.875rem;
    outline: none;

    &:focus {
      border-color: #cbd5e1;
    }
  }
`;
