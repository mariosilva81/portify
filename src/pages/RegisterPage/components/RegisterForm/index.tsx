import { UserContext } from "../../../../providers/UserContext/UserContext";
import { StyledContainerButton, StyledContainerFields } from "./styles";
import { TRegisterForm, registerFormSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/Input";
import { useContext } from "react";

interface TBodyForm {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister, loading } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    const bodyForm: TBodyForm = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    userRegister(bodyForm);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <StyledContainerFields>
        <Input type="text" placeholder="Nome" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <Input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type="password" placeholder="Senha" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <Input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </StyledContainerFields>

      <StyledContainerButton>
        <Button
          type="submit"
          widthsize="med"
          color="solid-green"
          name={loading ? "cadastrando" : "cadastrar-se"}
        />
      </StyledContainerButton>
    </form>
  );
};
