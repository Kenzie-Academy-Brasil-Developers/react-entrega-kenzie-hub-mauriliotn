import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useContext, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { UserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const submit = (formData) => {
    userRegister(formData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        animationClass={styles.slideName}
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        error={errors.name}
        disabled={loading}
        {...register("name")}
      />

      <Input
        animationClass={styles.slideEmail}
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu email"
        error={errors.email}
        disabled={loading}
        {...register("email")}
      />

      <InputPassword
        animationClass={styles.slidePassword}
        label="Senha"
        placeholder="Digite aqui sua senha"
        error={errors.password}
        disabled={loading}
        {...register("password")}
      />
      <InputPassword
        animationClass={styles.slideConfirmPassword}
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        error={errors.confirmPassword}
        disabled={loading}
        {...register("confirmPassword")}
      />
      <Input
        animationClass={styles.slideBio}
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        error={errors.bio}
        disabled={loading}
        {...register("bio")}
      />
      <Input
        animationClass={styles.slideContact}
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        error={errors.contact}
        disabled={loading}
        {...register("contact")}
      />
      <Select
        animationClass={styles.slideModule}
        label="Selecione o módulo"
        error={errors.course_module}
        disabled={loading}
        {...register("course_module")}
      >
        <option hidden defaultValue className={styles.option} value="">
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
          !isValid || !isDirty
            ? `btn negative bg ${styles.slideButton}`
            : `btn default bg ${styles.slideButton}` 
        }
        disabled={loading}
      >
        {loading ? <ImSpinner /> : "Cadastrar"}
      </button>
    </form>
  );
};
