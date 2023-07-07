import { UserContext } from "../../../../providers/UserContext/UserContext";
import { StyledContainerButtons, StyledContainerFields } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginForm, loginFormSchema } from "./schema";
import { Button } from "../../../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/Input";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin, loading } = useContext(UserContext);

  const submit: SubmitHandler<TLoginForm> = async (formData) => {
    await userLogin(formData);
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <StyledContainerFields>
        <Input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </StyledContainerFields>

      <StyledContainerButtons>
        <Button
          type="submit"
          widthsize="small2"
          color="solid-green"
          name={loading ? "entrando" : "entrar"}
        />

        <p>Não possui cadastro?</p>

        <Link to="/register">
          <Button
            type="button"
            widthsize="med2"
            name="cadastre-se"
            color="outline-white"
          />
        </Link>
      </StyledContainerButtons>
    </form>
  );
};
