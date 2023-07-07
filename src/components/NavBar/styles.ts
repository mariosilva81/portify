import { styled } from "styled-components";

export const StyledNavBar = styled.nav`
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
