import React from "react";
import { TModalForm } from "../../pages/DashboardPage/ProjectsPage/components/AddProjectModal/components/AddForm/schema";

export interface IProjectsProviderProps {
  children: React.ReactNode;
}

export interface IProject {
  portfolioId: number;
  id?: number;
  name: string;
  description: string;
  repository: string;
  link?: string;
  img?: string;
}

export interface IProjectsContext {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
  createProject: (formData: TModalForm, userID: number) => Promise<void>;
  deleteProject: (projectID: number) => Promise<void>;
  editProject: (formData: TModalForm, idProject: number) => Promise<void>;
}