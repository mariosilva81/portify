import { TProfileForm } from "../../pages/DashboardPage/ProfilePage/components/ProfileForm/schema";
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

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortfolioProvider = ({ children }: IPortfolioProviderProps) => {
  const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);

  const { setLoading } = useContext(UserContext);

  const navigate = useNavigate();

  const createPortfolio = async (formData: TProfileForm, userId: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

      const { data } = await api.post("/portfolios",
      { ...formData, userId: userId },
      { headers: { Authorization: `Bearer ${token}` }});

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

  const editPortfolio = async (formData: TProfileForm) => {
    const token = localStorage.getItem("@TOKEN");
    const portfolioId = localStorage.getItem("@PORTFOLIOID");

    try {
      const { data } = await 
      api.put(`/portfolios/${portfolioId}`, formData, 
      { headers: { Authorization: `Bearer ${token}` }});

      setPortfolio(data);
      localStorage.setItem("@COLORTHEME", data.color);
      toast.success("Portfólio atualizado com sucesso.");
      navigate("/dashboard/published");

    } catch (error: AxiosError | any) {
      toast.error("Não foi possível editar este portfólio.");
      console.error(error.message);
    }
  };

  useEffect(() => {
    const searchPortfolioUser = async () => {
      const userId = localStorage.getItem("@USERID");

      if (userId) {
        try {
          const { data } = await 
          api.get(`/portfolios?_embed=projects&userId=${userId}`);

          if (data.length !== 0) {
            localStorage.setItem("@PORTFOLIO", JSON.stringify(true));
          } else {
            localStorage.setItem("@PORTFOLIO", JSON.stringify(false));
          }

        } catch (error: AxiosError | any) {
          toast.error("Ops! Algo deu errado.")
          console.error(error.message);
        }
      }
    };
    searchPortfolioUser();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortfolio,
        editPortfolio,
        createPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
