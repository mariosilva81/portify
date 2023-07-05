import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    padding-left: 15%;
    padding-right: 15%;

    margin-top: 1rem;
  }
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
  }
`;

export const TittleAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 44px;
  }

  button{
    gap:.5rem

  }

  img{
    width: 30px;
  }
`;
