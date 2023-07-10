import { styled } from "styled-components";

export const StyledProjectCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  .img-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media (max-width: 49.9375rem) {
      justify-content: center;
      align-items: center;
    }
  }

  .img-project {
    border: .0625rem solid var(--color-black);
    border-radius: 1.25rem;

    width: 15.625rem;
    height: 9.375rem;
  }

  .title-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: var(--color-black);
    }

    p {
      width: 100%;
      max-width: 18.75rem;
      align-self: center;
    }

    @media (max-width: 49.9375rem) {
      align-items: center;
    }
  }

  @media (min-width: 50rem) {
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

  img {
    cursor: pointer;
  }
`;
