import { TCreateProfileForm } from "../../pages/DashboardPage/ProfilePage/components/CreateProfileForm/schema";
import { TEditProfileForm } from "../../pages/DashboardPage/ProfilePage/components/EditProfileForm/schema";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import {
  IPortfolio,
  IPortfolioContext,
  IPortfolioProviderProps,
} from "./@types";
import { ProjectsContext } from "../ProjectsContext/ProjectsContext";

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortfolioProvider = ({ children }: IPortfolioProviderProps) => {
  const { setProjectList } = useContext(ProjectsContext);
  const { setLoading } = useContext(UserContext);

  const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);

  const navigate = useNavigate();

  const createPortfolio = async (formData: TCreateProfileForm, userId: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

      const { data } = await api.post(
        "/portfolios",
        { ...formData, userId: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPortfolio(data);

      localStorage.setItem("@PORTFOLIOID", data.id);
      localStorage.setItem("@COLORTHEME", data.color);

      toast.success("Portfólio criado com sucesso.");
      navigate("/dashboard/published");
    } catch (error: AxiosError | any) {
      toast.error("Não foi possível criar este portfólio.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const editPortfolio = async (formData: TEditProfileForm) => {
    const token = localStorage.getItem("@TOKEN");
    const portfolioId = JSON.parse(localStorage.getItem("@PORTFOLIOID")!);

    try {
      const { data } = await api.put(`/portfolios/${portfolioId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPortfolio(data);
      localStorage.setItem("@COLORTHEME", data.color);
      toast.success("Portfólio atualizado com sucesso.");
      navigate("/dashboard/published");
    } catch (error: AxiosError | any) {
      toast.error("Não foi possível editar este portfólio.");
      console.error(error.message);
    }
  };

  const verifyPortfolio = async () => {
    const userId = JSON.parse(localStorage.getItem("@USERID")!);

    if (userId) {
      try {
        const { data } = await api.get(`/portfolios?userId=${userId}`);

        if (data.length !== 0) {
          return true;
        } else {
          return false;
        }
      } catch (error: AxiosError | any) {
          toast.error("Ops! Algo deu errado.");
          console.error(error.message);
          return false;
      }
    }
  };
    
  const searchPortfolioProjects = async () => {
    const portfolioId = localStorage.getItem("@PORTFOLIOID");

    if (portfolioId) {
      try {
        setLoading(true);

        const { data } = await api.get(`/portfolios/${portfolioId}/projects/`);
        setProjectList(data);
      } catch (error: AxiosError | any) {
        toast.error("Ops! Algo deu errado.");
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    searchPortfolioProjects();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortfolio,
        editPortfolio,
        createPortfolio,
        searchPortfolioProjects,
        verifyPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
