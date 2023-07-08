import React from "react";
import { TAddForm } from "../../pages/DashboardPage/ProjectsPage/components/AddProjectModal/components/AddForm/schema";

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
  coverUrl?: string;
}

export interface IProjectsContext {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
  createProject: (formData: TAddForm, userID: number) => Promise<void>;
  deleteProject: (projectID: number) => Promise<void>;
  editProject: (formData: TAddForm, idProject: number) => Promise<void>;
  setSelectedProjectId: React.Dispatch<React.SetStateAction<number | undefined>>;
}