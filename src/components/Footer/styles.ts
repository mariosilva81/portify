import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 8rem;

  max-width:3000px;

  img {
    width: 5rem;
    height: 1.5rem;

    color:var(--color-black);
  }

  p{
    font-size: 1rem;
    font-family: var(--font-family-secondary);

    text-align: center;
    max-width: 250px;

    color:var(--color-black);
  }

  @media(min-width: 620px) {
    padding:var(--padding-default);

    justify-content:space-between;

    p {
      max-width: 400px;
    }
  }
`;
