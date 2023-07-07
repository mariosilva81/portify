import styled from "styled-components";

export const StyledContainerFields = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  p {
    color: red;
  }
`;

export const StyledContainerButtons = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    button {
      width: 100%;
    }

    p {
      align-self: center;
    }
  }
`;
