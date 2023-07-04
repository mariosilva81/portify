import React from "react";
import { TModalForm } from "../../pages/DashboardPage/ProjectsPage/components/ProjectModal/ModalForm/schema";

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
  createProject: (formData: TModalForm, userID: number) => Promise<void>;
  deleteProject: (projectID: number) => Promise<void>;
  updateProject: (formData: TModalForm, idProject: number) => Promise<void>;
}
