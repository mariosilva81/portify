import { useContext, useState } from "react";
import { StyledButton } from "../../../components/Button/styles";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { UserContext } from "../../../providers/UserContext/UserContext";
import AddCircle from "../../../assets/icons/add-circle.png";
import {
  Container,
  TittleAndButtonContainer,
  SectionStyled,
  ContentWrapper,
  NameButtonContainer,
} from "./styles";
import { ProjectList } from "../../../components/ProjectList";
import { ProjectCard } from "../../../components/ProjectList/ProjectCard";
import { ProjectsContext } from "../../../providers/ProjectsContext/ProjectsContext";
import { NavBar } from '../../../components/NavBar';
import { AddProjectModal } from './components/AddProjectModal';
import { EditProjectModal } from './components/EditProjectModal';

export const ProjectsPage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { projectList } = useContext(ProjectsContext);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <Container>
      <Header>
        <NameButtonContainer>
          <h3>{user?.name}</h3>
          <StyledButton
            color="outline-black"
            widthsize="small"
            onClick={() => userLogout()}
          >
             Sair
          </StyledButton>
        </NameButtonContainer>
      </Header>
      <ContentWrapper>
      <NavBar/>
        <SectionStyled>
          <TittleAndButtonContainer>
            <h2>Meus Projetos</h2>
            <StyledButton color="solid-green" widthsize="large1" onClick={() => setOpenAddModal(true)}>
              <img src={AddCircle} alt="Ícone de adição na cor branca" />
              Adicionar Projeto
            </StyledButton>
          </TittleAndButtonContainer>
          <ProjectList>
            {projectList?.length !== 0 ? (
              <ProjectCard setOpenEditModal={setOpenEditModal}/>
            ) : (
              <h3>Nenhum projeto cadastrado</h3>
            )}
          </ProjectList>
        </SectionStyled>
      </ContentWrapper>
      {openAddModal && <AddProjectModal setOpenAddModal={setOpenAddModal}/>}
      {openEditModal && <EditProjectModal setOpenEditModal={setOpenEditModal}/>}
      <Footer />
    </Container>
  );
};
