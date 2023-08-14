import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { ImSpinner } from "react-icons/im";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!", {
        theme: "dark",
        autoClose: 1500,
      });
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("usuário ja cadastrado", {
          theme: "dark",
          autoClose: 1500,
        });
      }
    } finally {
      setLoading(useForm);
    }
  };

  const submit = (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        error={errors.name}
        disabled={loading}
        {...register("name")}
      />

      <Input
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu email"
        error={errors.email}
        disabled={loading}
        {...register("email")}
      />
      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        disabled={loading}
        {...register("password")}
      />
      <InputPassword
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword}
        disabled={loading}
        {...register("confirmPassword")}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        disabled={loading}
        {...register("bio")}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        error={errors.contact}
        disabled={loading}
        {...register("contact")}
      />
      <Select
        label="Selecione o módulo"
        error={errors.course_module}
        disabled={loading}
        {...register("course_module")}
      >
        <option defaultValue className={styles.option} value="">
          Selecione o Módulo
        </option>
        <option
          className={styles.option}
          value="Primeiro módulo (Introdução ao Frontend)"
        >
          Primeiro Módulo
        </option>
        <option
          className={styles.option}
          value="Segundo módulo (Frontend Avançado)"
        >
          Segundo Módulo
        </option>
        <option
          className={styles.option}
          value="Terceiro módulo (Introdução ao Backend)"
        >
          Terceiro Módulo
        </option>
        <option
          className={styles.option}
          value="Quarto módulo (Backend Avançado)"
        >
          Quarto Módulo
        </option>
      </Select>
      <button
        className={
          errors && Object.keys(errors).length > 0
            ? "btn negative bg"
            : "btn default bg"
        }
        disabled={loading}
      >
        {loading ? <ImSpinner /> : "Cadastrar"}
      </button>
    </form>
  );
};
