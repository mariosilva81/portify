import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    padding-left: 15%;
    padding-right: 15%;

    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MenuStyled = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-left: 15%;
  padding-right: 15%;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  cursor: pointer;

  img {
    width: 30px;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-black);

    a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

export const TittleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  h2 {
    font-size: 2.5rem;
  }

  button {
    gap: 0.5rem;
  }

  img {
    width: 30px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
