import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";
import Git from "../../../assets/icons/github.png";
import Link from "../../../assets/icons/link.png";
import { useContext, useState } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext/ProjectsContext";
import { ImagesContainer, StyledProjectCard } from "./styles";

interface EditProjectModalProps {
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectCard = ({ setOpenEditModal }: EditProjectModalProps) => {
  const isDashboardProjects = window.location.pathname.includes(
    "/dashboard/projects"
  );

  const { deleteProject, projectList } = useContext(ProjectsContext);

  const handleDelete = (projectID: number | undefined) => {
    if (typeof projectID === "number") {
      deleteProject(projectID);
    }
  };

  const redirectLinks = (route: string) => {
    window.location.replace(route);
  };

  return (
    <>
      {projectList.map((project) => {
        if (isDashboardProjects) {
          return (
            <StyledProjectCard key={project.id}>
              <div className="title-container">
                {<img className="img-project" src={project.img} />}
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
              <ImagesContainer>
                <img
                  src={Edit}
                  alt="Ícone de um lápis na cor verde que simboliza um botão para editar o projeto"
                  onClick={() => {
                    setOpenEditModal(true);
                  }}
                />
                <img
                  src={Delete}
                  alt="Ícone de uma lixeira na cor verde que simboliza um botão para excluir o projeto"
                  onClick={() => {
                    handleDelete(project.id);
                  }}
                />
              </ImagesContainer>
            </StyledProjectCard>
          );
        } else {
          return (
            <StyledProjectCard key={project.id}>
              <ImagesContainer>
                <img
                  src={Git}
                  alt="Ícone do GitHub na cor verde que simboliza um botão para visualizar o projeto"
                  onClick={() => {
                    redirectLinks(project.repository);
                  }}
                />
                <a href={project.link} target="_blank">
                  <img
                    src={Link}
                    alt="Ícone de um link na cor verde que simboliza um botão para acessar o projeto"
                  />
                </a>
              </ImagesContainer>
            </StyledProjectCard>
          );
        }
      })}
    </>
  );
};
