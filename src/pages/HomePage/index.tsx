import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import home from "../../assets/images/home.png";
import logo from "../../assets/images/logo-green.png";
import { Link } from "react-router-dom";
import {
  StyledHeaderButtons,
  StyledHomeButtons,
  StyledImgContainer,
  StyledMain,
  StyledTextContainer,
} from "./styles";

export const HomePage = () => {
  return (
    <>
      <Header>
        <StyledHeaderButtons>
          <Link to="/register">
            <Button name="Cadastre-se" widthsize="large1" color="solid-black" />
          </Link>
          <Link to="/login">
            <Button
              name="Acessar Portifolio"
              color="solid-green"
              widthsize="large1"
            />
          </Link>
        </StyledHeaderButtons>
      </Header>

      <StyledMain>
        <StyledImgContainer>
          <img
            src={home}
            alt="mulher com roupa verder segurando um laptop nas mãos"
          />
        </StyledImgContainer>

        <StyledTextContainer>
          <img src={logo} alt="logotipo da pagina na cor verde" />
          <h1>Crie seu</h1>
          <h1>portfólio online</h1>
          <p>Crie um portfólio para você em minutos</p>

          <StyledHomeButtons>
            <Link to="/register">
              <Button name="Cadastre-se" color="solid-green" widthsize="med" />
            </Link>
            <p>ou</p>
            <Link to="/login">
              <Button
                name="Acessar Portfólio"
                color="outline-white"
                widthsize="large2"
              />
            </Link>
          </StyledHomeButtons>
        </StyledTextContainer>
      </StyledMain>

      <Footer />
    </>
  );
};
