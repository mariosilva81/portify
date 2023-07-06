import styled from "styled-components";

export const StyledContainerFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  p {
    color: red;
    font-weight: var(--font-weight-1);
  }

  @media (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const StyledContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.5rem;

  @media (max-width: 550px) {
    button {
      width: 100%;
    }
  }
`;
