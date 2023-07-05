import { styled } from "styled-components";

export const SytledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  height: 4.375rem;
  gap: 0.625rem;

  background-color: var(--color-black);

  img {
    width: 5.3125rem;
    height: 1.5625rem;
  }
`;
