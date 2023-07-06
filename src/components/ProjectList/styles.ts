import { styled } from "styled-components";

export const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  @media (min-width: 800px) {
    gap: 3rem;
  }
`;
