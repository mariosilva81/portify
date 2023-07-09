import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditForm, EditFormSchema } from "./schema";
import { useContext } from "react";
import { ProjectsContext } from "../../../../../../../providers/ProjectsContext/ProjectsContext";
import { StyledButton } from "../../../../../../../components/Button/styles";
import { StyledEditForm } from "./styles";

interface EditFormProps {
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditForm: React.FC<EditFormProps> = ({ setOpenEditModal }) => {
  const { editProject, selectedProjectId } = useContext(ProjectsContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditForm>({
    resolver: zodResolver(EditFormSchema),
  });

  const submit: SubmitHandler<TEditForm> = (formData) => {
    if (selectedProjectId !== null) {
      editProject(formData, selectedProjectId)
      setOpenEditModal(false);
      reset();
    }
  };

  return (
    <StyledEditForm onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">Nome</label>
      <Input type="text" id="name" {...register("name")} />
      {errors.name?.message && <p>{errors.name.message}</p>}

      <label htmlFor="description">Descrição resumida</label>
      <Input type="text" id="description" {...register("description")} />
      {errors.description?.message && <p>{errors.description.message}</p>}

      <label htmlFor="repository">Repositório</label>
      <Input type="text" id="repository" {...register("repository")} />
      {errors.repository?.message && <p>{errors.repository.message}</p>}

      <label htmlFor="link">Link do deploy (opcional)</label>
      <Input type="text" id="link" {...register("link")} />

      <label htmlFor="img">URL da imagem (opcional)</label>
      <Input type="text" id="img" {...register("coverUrl")} />

      <StyledButton color="solid-green" widthsize="large1" type="submit">
        Criar Projeto
      </StyledButton>
    </StyledEditForm>
  );
};
