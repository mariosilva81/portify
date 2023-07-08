import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  min-height: 100vh;

  section {
    padding-left: 15%;
    padding-right: 15%;

    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const NameButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h3{
      color:var(--color-white);
    }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
