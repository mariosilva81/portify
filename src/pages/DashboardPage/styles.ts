import { styled } from "styled-components";

export const StyledHeaderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: white;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 3.125rem;
  figure {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }

    figcaption {
      /* font-family: --font-family-primary; */
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

  section {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }
`;
