import { styled } from "styled-components";

export const StyledHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h3 {
    color: white;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
  gap: 1.25rem;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;

  h1 {
    span {
      color: var(--color-primary);
    }
  }

  p {
    color: gray;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 3.125rem;
  figure {
    display: flex;
    align-items: center;

    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }

    figcaption {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f1411;

      &:hover,
      &:active {
        color: var(--color-primary);
      }
    }
  }
`;

export const StyledSectionHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
  margin-bottom: 3.125rem;
  margin-top: 3.125rem;
`;
