import React from "react";
import { TModalForm } from "../../pages/DashboardPage/ProjectsPage/components/ModalForm/schema";

export interface IProjectsProviderProps {
  children: React.ReactNode;
}

export interface IProject {
  portfolioId: number;
  name: string;
  repository: string;
  link: string;
  id: number;
}

export interface IProjectsContext {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
  createProject: (formData: TModalForm, userID: number) => Promise<void>;
  deleteProject: (projectID: number) => Promise<void>;
  editProject: (formData: TModalForm, idProject: number) => Promise<void>;
}