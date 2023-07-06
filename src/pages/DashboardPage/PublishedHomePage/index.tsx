import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import profile from "../../../assets/icons/profile.png";
import projects from "../../../assets/icons/projects.png";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Link } from "react-router-dom";
import { StyledHeaderButtons, StyledMain, StyledNav } from "./styles";
import { Footer } from "../../../components/Footer";

export const PublishedHomePage = () => {
  const { userLogout, user } = useContext(UserContext);

  return (
    <>
      <Header>
        <StyledHeaderButtons>
          <h3>{"user?.name"}</h3>
          <Button
            name="Sair"
            color="outline-black"
            widthsize="small"
            onClick={userLogout}
          />
        </StyledHeaderButtons>
      </Header>
      <StyledMain>
        <h1>
          Seja bem vindo <span> {"user?.name"}</span>
        </h1>
        <p>Selecione uma das opções abaixo</p>

        <StyledNav>
          <Link to="/dashboard/profile">
            <figure>
              <img
                src={profile}
                alt="ícone com desenho de uma pessoa, representando o perfil, ao clicar exibe informações do perfil do usuario logado"
              />
              <figcaption>informações de perfil</figcaption>
            </figure>
          </Link>

          <Link to="/dashboard/projects">
            <figure>
              <img
                src={projects}
                alt="ícone com desenho de varios projetos, ao clicar, exiber os projetos do usuário logado"
              />
              <figcaption>meus projetos</figcaption>
            </figure>
          </Link>
        </StyledNav>

        <section>
          <p>Seu portfólio ainda não está publicado</p>
          <h1> Seu portfólio wwwww</h1>
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};
