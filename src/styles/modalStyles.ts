import { styled } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100%;
  padding: 2rem;

  background: #11bcc750;

  margin: 0 auto;

  .modal-box {
    position: relative;

    width: 100%;
    max-width: 500px;

    padding: 2rem;
    gap: 1.5rem;

    display: flex;
    flex-direction: column;

    background: var(--color-white);

    form {
      p {
        color: red;
        font-family: var(--font-family-secondary);
      }
    }

    button {
      align-self: flex-end;

      @media (max-width: 760px) {
        width: 100%;
      }
    }
  }

  .title-container {
    img {
      position: absolute;

      cursor: pointer;

      opacity: 50%;
      width: 37px;
      top: 10px;
      right: 25px;
    }
  }
`;
