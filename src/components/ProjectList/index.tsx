import React from "react";

interface IProjectList {
  children: React.ReactNode;
}

export const ProjectList: React.FC<IProjectList> = ({ children }) => {
  return <ul>{children}</ul>;
};
