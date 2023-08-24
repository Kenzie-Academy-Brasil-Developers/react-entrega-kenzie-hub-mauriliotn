import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";

export const EditModalForm = () => {
  const { editTech, editingTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (formData) => {
    editTech(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        disabled={true}
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
        className={!isValid || !isDirty ? "btn negative bg" : "btn default bg"}
        type="submit"
      >
        Salvar alterações
      </button>
    </form>
  );
};
