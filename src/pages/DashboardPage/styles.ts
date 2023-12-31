import styled from "styled-components";

export const StyledHeaderButton = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  h3 {
    color: var(--color-white);

    font-family: var(--font-family-secondary);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-1);
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;


  margin-left: 15%;
  margin-right: 15%;
  margin-top: 3.125rem;
  margin-bottom: 3.125rem;

  h1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    span {
      color: var(--color-primary);
    }
  }

  p {
    color: var(--color-black-text);

    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5625rem;

    width: 100%;

    padding: 3rem 0;

    a {
      cursor: pointer;

      color: var(--color-primary);

      font-size: clamp(1rem, 4vw, 1.75rem);
      font-weight: var(--font-weight-2);
      font-family: var(--font-family-primary);
    }

    p {
      color: var(--color-black-text);

      font-family: var(--font-family-secondary);
      font-weight: var(--font-weight-1);
      font-size: var(--font-size-2);

      align-self: center;
      justify-content: center;
    }

    h2 {
      font-size: clamp(1rem, 4vw, 1.75rem);

      padding: 0;
    }

    small {
      color: var(--color-black-text);

      font-family: var(--font-family-secondary);
      font-weight: var(--font-weight-1);
      font-size: var(--font-size-1);
    }

    @media (min-width: 90rem) {
      margin-top: 4rem;
    }

    @media (min-width: 160rem) {
      margin-top: 20rem;
    }
  }
`;
