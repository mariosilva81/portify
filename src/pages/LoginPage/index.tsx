import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoginForm } from "./components/LoginForm";
import { Button } from "../../components/Button";

export const LoginPage = () => {
  return (
    <>
      <Header>
        <div>
          <Link to="/register">
            <Button
              type="button"
              widthsize="med"
              name="cadastre-se"
              color="solid-black"
            />
          </Link>
          <Link to="/login">
            <Button
              type="button"
              widthsize="large1"
              color="solid-green"
              name="acesse seu portfólio"
            />
          </Link>
        </div>
      </Header>
      <main>
        <div>
          <img
            src="src\assets\images\login.png"
            alt="Homem de óculos segurando e olhando um tablet"
          />
          <h1>Login</h1>
          <p>Acesse o portfólio</p>
        </div>

        <div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
};
