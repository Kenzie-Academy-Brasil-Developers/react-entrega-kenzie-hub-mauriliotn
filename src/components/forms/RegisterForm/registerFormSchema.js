import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigratório"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "são necessários pelo menos 8 caracteres")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
      .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/,
        "É necessário pelo menos um caracter especial."
      ),
    confirmPassword: z
      .string()
      .nonempty("A senha precisa ser igual a anterior"),
    bio: z.string().nonempty("É necessário alguma descrição sua"),
    contact: z.string().nonempty("É necessário algum tipo de contato"),
    course_module: z
      .string()
      .nonempty("Por favor selecione em que módulo se encontra"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
