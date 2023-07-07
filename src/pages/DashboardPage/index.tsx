import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import profile from "../../assets/icons/profile.png";
import projects from "../../assets/icons/projects.png";
import home from "../../assets/icons/home.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledHeaderButton, StyledMain, StyledNav } from "./styles";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import { Footer } from "../../components/Footer";

export const DashboardPage = () => {
  const [isPortfolio, setIsPortfolio] = useState<boolean>(false);

  const { userLogout, user } = useContext(UserContext);
  const { verifyPortfolio } = useContext(PortfolioContext);

  const navigate = useNavigate();

  useEffect(() => {
    const hasPortfolio = async () => {
      const newIsPortfolio: boolean = await verifyPortfolio();
      setIsPortfolio(newIsPortfolio);
      console.log("effect");
    };
    hasPortfolio();
  }, []);

  return (
    <>
      <Header>
        <StyledHeaderButton>
          <h3> {user?.name}</h3>

          <Button
            name="Sair"
            color="outline-black"
            widthsize="small"
            onClick={userLogout}
          />
        </StyledHeaderButton>
      </Header>
      <StyledMain>
        <h1>
          Seja bem vindo: <span> {user?.name}</span>
        </h1>
        <p>Selecione uma das opções abaixo</p>

        <StyledNav>
          <Link to="/dashboard">
            <figure>
              <img
                src={home}
                alt="ícone com desenho de uma casa, exibe a tela de inicio da dashboard"
              />
              <figcaption>Início</figcaption>
            </figure>
          </Link>
          <Link to="/dashboard/profile">
            <figure>
              <img
                src={profile}
                alt="ícone com desenho de uma pessoa, representando o perfil, ao clicar exibe informações do perfil do usuario logado"
              />
              <figcaption>informações de perfil</figcaption>
            </figure>
          </Link>

          <Link to="/dashboard/projects">
            <figure>
              <img
                src={projects}
                alt="ícone com desenho de varios projetos, ao clicar, exiber os projetos do usuário logado"
              />
              <figcaption>meus projetos</figcaption>
            </figure>
          </Link>
        </StyledNav>

        {isPortfolio ? (
            <section>
              <p>Seu portfólio está publicado</p>
              <h1> Seu portfólio wwwww</h1>
            </section>
        ) : (
          <section>
            <p>Seu portfólio ainda não está publicado</p>
            <Button
              name="Publicar portfólio"
              color="solid-green"
              widthsize="large1"
              onClick={() => navigate("/dashboard/profile")}
            />
          </section>
        )}
      </StyledMain>

      <Footer />
    </>
  );
};
