// import LogoWhite from "../../assets/images/logo-white.png";
import LogoBlack from "../../assets/images/logo-black.png";
import { FooterStyled } from "./styles";

export const Footer = () => {
  return (
    <FooterStyled>
      {/* {blackMode ? (<img src={LogoWhite} alt="portify" />
      ) : <img src={LogoBlack} alt="portify" />} */}
      <img src={LogoBlack} alt="portify" />
      <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
    </FooterStyled>
  );
};
