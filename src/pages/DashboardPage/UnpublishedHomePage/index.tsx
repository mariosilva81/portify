import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import home from "../../../assets/icons/home.png";
import profile from "../../../assets/icons/profile.png";
import projects from "../../../assets/icons/projects.png";
import {
  StyledHeaderButtons,
  StyledMain,
  StyledNav,
  StyledSectionHome,
} from "./styles";
import { useState, useContext } from "react";
import { ProjectsPage } from "../ProjectsPage";
import { ProfilePage } from "../ProfilePage";
import { UserContext } from "../../../providers/UserContext/UserContext";

type Section = "home" | "profile" | "projects";

export const UnpublishedHomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const handleImageClick = (section: Section) => {
    setActiveSection(section);
  };

  const { userLogout, user } = useContext(UserContext);

  return (
    <>
      <Header>
        <StyledHeaderButtons>
          <h3>{"user.name"}</h3>
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
          Seja bem vindo <span> {"user.name"}</span>
        </h1>
        <p>Selecione uma das opções abaixo</p>
        <StyledNav>
          <figure onClick={() => handleImageClick("home")}>
            <img
              src={home}
              alt="ícone com desenho de uma casa, exibe a tela de inicio da dashboard"
            />
            <figcaption>Início</figcaption>
          </figure>

          <figure onClick={() => handleImageClick("profile")}>
            <img
              src={profile}
              alt="ícone com desenho de uma pessoa, representando o perfil, ao clicar exibe informações do perfil do usuario logado"
            />
            <figcaption>informações de perfil</figcaption>
          </figure>

          <figure onClick={() => handleImageClick("projects")}>
            <img
              src={projects}
              alt="ícone com desenho de varios projetos, ao clicar, exiber os projetos do usuário logado"
            />
            <figcaption>meus projetos</figcaption>
          </figure>
        </StyledNav>

        {activeSection === "home" ? (
          <StyledSectionHome>
            <p>Seu portfólio ainda não está publicado</p>
            <Button
              name="Publicar portfólio"
              color="solid-green"
              widthsize="large1"
              onClick={() => handleImageClick("profile")}
            />
          </StyledSectionHome>
        ) : (
          ""
        )}

        {activeSection === "profile" ? (
          <section>
            <ProfilePage />
          </section>
        ) : (
          ""
        )}

        {activeSection === "projects" ? (
          <section>
            <ProjectsPage />
          </section>
        ) : (
          ""
        )}
      </StyledMain>
      <Footer />
    </>
  );
};
