import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  width: 100%;
  height: 4.375rem;

  padding-left: 15%;
  padding-right: 15%;

  background: ${(props) => props.theme.colors.background};

  img {
    width: 5.3125rem;
    height: 1.5625rem;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;

  background: ${(props) => props.theme.colors.background};

  color: ${(props) => props.theme.colors.text};
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 1rem;
  padding-left: 15%;
  padding-right: 15%;
  
  color: ${(props) => props.theme.colors.text};

  h2 {
    font-size: var(--font-size-6);

    width: fit-content;
  }
  
  p {
    line-height: 1.75rem;
    font-size: var(--font-size-3);

    width: 100%;
    max-width: 75rem;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-3);

    color: var(--color-primary);

    width: fit-content;
  }

  @media (min-width: 50rem) {
    width: 40vw;
  }
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding-left: 15%;
  padding-right: 15%;
  margin-top: 5rem;
  margin-bottom: 2rem;

  > h1 {
    font-size: clamp(2rem, 4vw, 2.25rem);
    margin-bottom: 1rem;

    @media (max-width: 49.875rem) {
      align-self: center;
    }
  }

  ul {
    gap: 4rem;
    
    margin-bottom: 3rem;
  }
`;
