import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyles } from "./styles/globalStyles";
import { ResetStyles } from "./styles/resetStyles";
import { UserProvider } from "./providers/UserContext/UserContext";
import { PortfolioProvider } from "./providers/PortfolioContext/PortfolioContext";
import { ProjectsProvider } from "./providers/ProjectsContext/ProjectsContext";

export const App = () => {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <UserProvider>
        <PortfolioProvider>
          <ProjectsProvider>
            <RoutesMain />
          </ProjectsProvider>
        </PortfolioProvider>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
