import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";
import { useContext, useState } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext/ProjectsContext";

export const ProjectCard = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const { deleteProject, projectList, setProjectList } =
    useContext(ProjectsContext);

  const handleDelete = (projectID: number) => {
    deleteProject(projectID);
  };

  return (
    <div>
      {projectList.map((project) => (
        <li key={project.id}>
          <img
            src={Edit}
            alt="Ícone de um lápis na cor verde que simboliza um botão para editar o projeto"
            onClick={() => {
              setIsOpenEdit(true);
            }}
          />
          <img
            src={Delete}
            alt="Ícone de uma lixeira na cor verde que simboliza um botão para excluir o projeto"
            onClick={() => handleDelete(project.id)}
          />
        </li>
      ))}
    </div>
  );
};
