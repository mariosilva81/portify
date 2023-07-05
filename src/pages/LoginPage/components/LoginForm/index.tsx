import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginForm, loginFormSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

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

  const submit: SubmitHandler<TLoginForm> = (formData) => {
    userLogin(formData);
    reset();
    console.log("Formulário", formData)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
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
      <Button
        widthsize="med2"
        color="solid-green"
        type="submit"
        name={loading ? "entrando" : "entrar"}
      />
    </form>
  );
};
