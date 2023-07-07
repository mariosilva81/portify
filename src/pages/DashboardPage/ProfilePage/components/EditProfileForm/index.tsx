import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext";
import { UserContext } from "../../../../../providers/UserContext/UserContext";
import { EditProfileFormSchema, TEditProfileForm } from "./schema";
import { Button } from "../../../../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledProfileForm } from "../../styles";
import { useContext } from "react";

export const EditProfileForm = () => {
  const { 
    portfolio, 
    editPortfolio, 
    setPortfolio 
  } = useContext(PortfolioContext);
  
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TEditProfileForm>({
    resolver: zodResolver(EditProfileFormSchema),
    defaultValues: {
      color: portfolio?.color,
      position: portfolio?.position,
      description: portfolio?.description
    }
  });
  
  const submit: SubmitHandler<TEditProfileForm> = (formData) => {
    if (portfolio?.id) {
      editPortfolio(formData, portfolio?.id);
      setPortfolio(null);
      reset();
    }
  };
  
  const { loading } = useContext(UserContext);

  return (
    <StyledProfileForm onSubmit={handleSubmit(submit)}>
      <label>Modo de cor</label>
      <select {...register("color")}>
        <option value="Claro">Claro</option>
        <option value="Escuro">Escuro</option>
      </select>

      <Input label="Cargo" placeholder="Cargo" {...register("position")} />
      {errors.position ? <p>{errors.position.message}</p> : null}

      <label>Descrição</label>
      <textarea placeholder="Descrição" {...register("description")} />
      {errors.description ? <p>{errors.description.message}</p> : null}

      <Button
        type="submit"
        widthsize="large1"
        color="solid-green"
        name={loading ? "Atualizando" : "Atualizar portfólio"}
      />
    </StyledProfileForm>
  );
};
