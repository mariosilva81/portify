import logo from "../../assets/images/logo-white.png";
import { SytledHeader } from "./styles";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <SytledHeader>
      <img src={logo} alt="Logotipo da Página" />
      {children}
    </SytledHeader>
  );
};
