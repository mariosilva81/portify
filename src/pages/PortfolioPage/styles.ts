import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  height: 4.375rem;
  gap: 0.625rem;

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
    line-height: 28px;
    font-size: var(--font-size-3);

    width: 100%;
    max-width: 1200px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    font-weight: 700;
    font-size: var(--font-size-3);
    color: var(--color-primary);

    width: fit-content;
  }

  @media (min-width: 800px) {
    width: 100vw;
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
    font-size: 36px;
  }
`;
