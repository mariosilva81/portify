import { styled } from "styled-components";

export const StyledHeaderButtons = styled.div`
  display: flex;
  gap: 0.9375rem;
`;

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledImgContainer = styled.div`
  width: 40%;
  margin-top: 3.125rem;
  img {
    width: 32.5rem;
    height: 46.875rem;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;
  margin-top: 3.125rem;
  img {
    width: 5.3125rem;
    height: 1.5625rem;
  }
`;

export const StyledHomeButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 40%;
`;
