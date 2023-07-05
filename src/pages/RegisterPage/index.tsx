import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RegisterForm } from "./components/RegisterForm";
import { StyledHeaderContainerIntern, StyledMain } from "./styles";

export const RegisterPage = () => {
  return (
    <>
      <Header>
        <StyledHeaderContainerIntern>
          <Button
            name="cadastre-se"
            type="button"
            widthsize="med"
            color="solid-black"
          />
          <Button
            name="acesse seu portfólio"
            type="button"
            widthsize="large1"
            color="solid-green"
          />
        </StyledHeaderContainerIntern>
      </Header>
      <StyledMain>
        <div>
          <button>
            <img
              src="src\assets\icons\arrow-back.png"
              alt="Ícone de uma seta para esquerda"
            />
            voltar
          </button>
          <h1>Cadastre-se</h1>
          <p>Preencha os campos abaixo para criar uma conta</p>
          <RegisterForm />
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
