import { createContext, useContext, useState } from "react";
import { IProject, IProjectsContext, IProjectsProviderProps } from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { TModalForm } from "../../pages/DashboardPage/ProjectsPage/components/ProjectModal/ModalForm/schema";
import { UserContext } from "../UserContext/UserContext";

export const ProjectsContext = createContext({} as IProjectsContext);

export const ProjectsProvider = ({ children }: IProjectsProviderProps) => {
  const [projectList, setProjectList] = useState<IProject[]>([]);

  const { setLoading } = useContext(UserContext);

  const createProject = async (formData: TModalForm, userID: number) => {
    const token = localStorage.getItem("@TOKEN");
    const { img, description, ...formRequest } = formData;
    try {
      setLoading(true);
      const { data } = await api.post(
        "/projects",
        { ...formRequest, portfolioId: userID },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProjectList((projectList) => [...projectList, data]);
      toast.success("Projeto criado com sucesso.");
    } catch (error: AxiosError | any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const editProject = async (formData: TModalForm, idProject: number) => {
    const token = localStorage.getItem("@TOKEN");
    const { img, description, ...formRequest } = formData;
    try {
      setLoading(true);
      const { data } = await api.put(`/projects/${idProject}`, formRequest, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const index = projectList.findIndex(
        (project) => project.id === idProject
      );
      if (index !== 1) {
        const updateProjectList = [...projectList];
        updateProjectList[index] = data;
        setProjectList(updateProjectList);
      }
    } catch (error: AxiosError | any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (projectID: number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      await api.delete(`/projects/${projectID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Projeto deletado com sucesso.");
      setProjectList(projectList.filter((project) => project.id !== projectID));
    } catch (error: AxiosError | any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projectList,
        createProject,
        editProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
