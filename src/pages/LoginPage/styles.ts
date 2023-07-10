import styled from "styled-components";

export const StyledContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 4rem 2rem;
  margin: 0 auto;
  
  width: 100%;

  @media (max-width: 46.25rem) {
    flex-wrap: wrap;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const StyledContainerImage = styled.div`
  width: 100%;
  min-width: 15rem;
  max-width: 26.5625rem;
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 25rem;

  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-7);
  }

  p {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    
    color: #00000080;
  }

  form {
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
