import { z } from "zod";

const isValidURL = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const EditFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome do projeto é obrigatório.")
    .min(3, "O nome do projeto deve ter no mínimo 3 caracteres."),
  description: z
    .string()
    .nonempty("A descrição é obrigatória.")
    .min(10, "A descrição deve ter no mínimo 10 caracteres.")
    .max(100, "A descrição deve ter no máximo 100 caracteres."),
  repository: z.string().refine(isValidURL, {
    message: "O link fornecido não é uma URL válida (ex.: http://www.exemplo.com.br).",
  }),
  link: z.string().refine(isValidURL, {
    message: "O link fornecido não é uma URL válida (ex.: http://www.exemplo.com.br).",
  }),
  coverUrl: z.string().optional(),
});

export type TEditForm = z.infer<typeof EditFormSchema>;
