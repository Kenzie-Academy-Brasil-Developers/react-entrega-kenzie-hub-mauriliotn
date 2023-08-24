import { z } from "zod";

export const modalFormSchema = z.object({
  title: z.string().nonempty("É necessário uma tecnologia"),
  status: z.string().nonempty("Por favor selecione o nível da tecnologia"),
});
