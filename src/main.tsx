import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { PortfolioProvider } from "./providers/PortfolioContext/PortfolioContext.tsx";
import { ProjectsProvider } from "./providers/ProjectsContext/ProjectsContext.tsx";
import { UserProvider } from "./providers/UserContext/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProjectsProvider>
          <PortfolioProvider>
            <App />
          </PortfolioProvider>
        </ProjectsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
