import { Footer } from "../../components/Footer";
import Logo from "../../assets/images/logo-green.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledHeader, UserContainer, UserInfoContainer, SectionStyled } from "./styles";
import { ProjectList } from "../../components/ProjectList"
import { ProjectCard } from "../../components/ProjectList/ProjectCard";

export const PortfolioPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <img src={Logo} alt="Logotipo da página na cor verde" />
      </StyledHeader>
      <UserContainer>
        <UserInfoContainer>
        <h2>{user?.name}Ricardo Rufino</h2>
        <p>{user?.position}Desenvolvedor Full Stack</p>
        </UserInfoContainer>
        <p>{user?.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar urna ante, nec dapibus leo semper nec. Vivamus aliquet nibh nec urna accumsan, eget euismod magna fringilla. Nam condimentum, enim ut rhoncus sagittis, tellus mi sodales erat, nec ornare nunc nisi sed tortor.</p>
        </UserContainer>
        <SectionStyled>
          <h1>Meus Projetos</h1>
            <ProjectList>
              <ProjectCard /> 
            </ProjectList>
        </SectionStyled>
      <Footer />
    </>
  );
};