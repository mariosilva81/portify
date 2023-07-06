import { LoginForm } from "./components/LoginForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import {
  StyledContainerHeader,
  StyledContainerMain,
  StyledContainerImage,
  StyledContainerForm,
} from "./styles";

export const LoginPage = () => {
  return (
    <>
      <Header>
        <StyledContainerHeader>
          <Link to="/register">
            <Button
              type="button"
              widthsize="med"
              name="cadastre-se"
              className="hidden"
              color="solid-black"
            />
          </Link>
          <Link to="/login">
            <Button
              type="button"
              widthsize="large1"
              color="solid-green"
              name="acesse seu portfólio"
            />
          </Link>
        </StyledContainerHeader>
      </Header>
      <main>
        <StyledContainerMain>
          <StyledContainerImage>
            <img
              src="src\assets\images\login.png"
              alt="Homem de óculos segurando e olhando um tablet"
            />
          </StyledContainerImage>
          <StyledContainerForm>
            <h1>Login</h1>
            <p>Acesse o portfólio</p>
            <LoginForm />
          </StyledContainerForm>
        </StyledContainerMain>
      </main>
      <Footer />
    </>
  );
};
