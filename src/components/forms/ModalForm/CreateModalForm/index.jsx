import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalFormSchema } from "./modalFormSchema";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";

export const CreateModalForm = () => {
  const { createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(modalFormSchema),
  });

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite o nome da tecnologia"
        error={errors.title}
        {...register("title")}
      />
      <Select label="Selecionar status" {...register("status")}>
        <option defaultValue value="Iniciante">
          Iniciante
        </option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </Select>
      <button
        className={
          !isValid || !isDirty ? "btn negative bg bold" : "btn default bg"
        }
        type="submit"
      >
        Cadastrar Tecnologia
      </button>
    </form>
  );
};
