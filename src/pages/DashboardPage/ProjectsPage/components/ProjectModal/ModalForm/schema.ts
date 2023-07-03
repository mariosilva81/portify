import { z } from "zod";

export const modalFormSchema = z.object({
  name: z.string()
    .nonempty("O nome é obrigatório.")
    .min(3, "O nome deve ter no mínimo 3 caracteres.")
    .regex(/[A-Z]/, "O nome deve conter pelo menos uma letra maiúscula.")
    .regex(/\s/, "É necessário nome e sobrenome"),  
  description: z.string()
    .nonempty("A descrição é obrigatória.")
    .min(10, 'A descrição deve ter no mínimo 10 caracteres.')
    .max(100, 'A descrição deve ter no máximo 100 caracteres.'),
  repository: z.string()
    .nonempty("O repositório é obrigatório."),
  link: z.string(),
  img: z.string(),
});

export type TModalForm = z.infer<typeof modalFormSchema>;