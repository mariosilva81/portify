import { UserContext } from "../../../../providers/UserContext/UserContext";
import { TRegisterForm, registerFormSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/Input";
import { StyledRegisterForm } from "./styles";
import { useContext } from "react";

interface TBodyForm {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const {
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
      password: formData.password
    }
    userRegister(bodyForm);   
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Nome"
        error={errors.name}
        {...register("name")}
      />
      <Input
        type="email"
        placeholder="E-mail"
        error={errors.email}
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="Senha"
        error={errors.password}
        {...register("password")}
      />
      <Input
        type="password"
        placeholder="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />
      <Button
        color="solid-green"
        widthsize="med"
        type="submit"
        name={loading ? "cadastrando" : "cadastre-se"}
      />
    </StyledRegisterForm>
  );
};
