import { useContext } from "react";
import { StyledButton } from "../../../components/Button/styles";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { UserContext } from "../../../providers/UserContext/UserContext";
import Home from "../../../assets/icons/home.png";
import Profile from "../../../assets/icons/profile.png";
import Projects from "../../../assets/icons/projects.png";
import AddCircle from "../../../assets/icons/add-circle.png";
import {
  Container,
  IconsContainer,
  MenuStyled,
  TittleAndButtonContainer,
} from "./styles";
import { ProjectList } from "../../../components/ProjectList";
import { ProjectsContext } from "../../../providers/ProjectsContext/ProjectsContext";
import { ProjectCard } from "../../../components/ProjectList/ProjectCard";

export const ProjectsPage = () => {
  const { user } = useContext(UserContext);
  const { projectList } = useContext(ProjectsContext);

  return (
    <Container>
      <Header>
        <div>
          <h3>{user?.name}</h3>
          <StyledButton color="outline-black" widthsize="small">
            Sair
          </StyledButton>
        </div>
      </Header>
      <MenuStyled>
        <IconsContainer>
          <img
            src={Home}
            alt="Ícone de uma casa, na cor verde, representando o botão de retornar para a página de início"
          />
          <h3>Início</h3>
        </IconsContainer>
        <IconsContainer>
          <img
            src={Profile}
            alt="Ícone de uma pessoa, na cor verde, representando o botão de retornar para a página de perfil"
          />
          <h3>Informações de Perfil</h3>
        </IconsContainer>
        <IconsContainer>
          <img
            src={Projects}
            alt="Ícone de projetos empilhados, na cor verde, representando o botão de retornar para a página de projetos"
          />
          <h3>Meus Projetos</h3>
        </IconsContainer>
      </MenuStyled>
      <section>
        <TittleAndButtonContainer>
          <h2>Meus Projetos</h2>
          <StyledButton color="solid-green" widthsize="large1">
            <img src={AddCircle} alt="Ícone de adição na cor branca" />
            Adicionar Projeto
          </StyledButton>
        </TittleAndButtonContainer>
        <ProjectList>
          {projectList?.length !== 0 ? (
            <ProjectCard />
          ) : (
            <h3>Nenhum projeto cadastrado</h3>
          )}
        </ProjectList>
      </section>
      <Footer />
    </Container>
  );
};
