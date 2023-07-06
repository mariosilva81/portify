import { styled } from "styled-components";

export const StyledProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  h1 {
    font-size: var(--font-size-5);
    color: var(--color-black);
  }

  img {
    cursor: pointer;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
