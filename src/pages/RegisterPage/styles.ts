import styled from "styled-components";

export const StyledHeaderContainerIntern = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 677px) {
    button:nth-of-type(1) {
      display: none;
    }
  }
`;

export const StyledMain = styled.main`

  div {
    border: 2px solid;

  }
`