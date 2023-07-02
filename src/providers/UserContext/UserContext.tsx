import { createContext, useEffect, useState } from "react";
import { TRegisterForm } from "../../pages/RegisterPage/components/RegisterForm/schema";
import { api } from "../../services/api";
import { IUserContext, IUserProviderProps, IUser, IUserLoginResponse, ILoading } from "./@types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<ILoading | boolean>(false)

  const currentPath = window.location.pathname;

  const navigate = useNavigate();

  const userLogin = async (formData: any) => {
    try {
      setLoading(true);

      const { data } = await api.post<IUserLoginResponse>("/sessions", formData);

      setUser(data.user);

      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));

      toast.success("Usuário logado com sucesso.");

      // PRECISA VERIFICAR PARA QUAL PÁGINA REDIRECIONAR COM BASE NO PERFIL DO USUÁRIO (SE TEM OU NÃO PORTFOLIO PUBLICADO)
      // navigate("/dashboard/unpublished")
      // navigate("/dashboard/published")
    } catch (error: AxiosError | any) {
      toast.error("Senha ou e-mail inválidos.");
            
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
    
  const userRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);

      await api.post("/users", formData);

      toast.success('Usuário criado com sucesso.');

      navigate('/');
    } catch (error: AxiosError | any) {
      toast.error("E-mail já existente.");
            
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = () => {
    setUser(null);
    
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    navigate('/');
  }

  //ESSA FUNÇÃO DE AUTOLOGIN PRECISA SER TESTADA DEPOIS
  useEffect(() => {
    const getUser = () => {
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');

      if (token && userId) {
        navigate(currentPath)       
      } 
    }
    getUser()
  }, []);

  return (
    <UserContext.Provider value={
      { 
        user, 
        loading,
        setLoading,
        userRegister, 
        userLogin, 
        userLogout 
      }
    }>
      {children}
    </UserContext.Provider>
  )
}