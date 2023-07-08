import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TModalForm, modalFormSchema } from "./schema";

export const ModalForm = ({ children }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TModalForm>({
    resolver: zodResolver(modalFormSchema),
  });

  const submit: SubmitHandler<TModalForm> = (formData) => {
    // Chama a função de criar ou editar
    // Cria uma constante
    // Passa o formData 
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input type="text" placeholder="Nome" {...register("name")} />
      {errors.name ? <p>{errors.name.message}</p> : null}

      <Input
        type="text"
        placeholder="Descrição resumida"
        {...register("description")}
      />
      {errors.description ? <p>{errors.description.message}</p> : null}

      <Input
        type="text"
        placeholder="Repositório"
        {...register("repository")}
      />
      {errors.repository ? <p>{errors.repository.message}</p> : null}

      <Input
        type="url"
        placeholder="Link do deploy (opcional)"
        {...register("link")}
      />

      <Input
        type="url"
        placeholder="URL da imagem (opcional)"
        {...register("img")}
      />

      {children}
    </form>
  );
};
