import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useContext, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { UserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = (formData) => {
    userLogin(formData, setLoading, reset);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          error={errors.email}
          disabled={loading}
          {...register("email")}
        />
      </div>

      <div>
        <InputPassword
          label="Senha"
          placeholder="Digite aqui sua senha"
          error={errors.password}
          disabled={loading}
          {...register("password")}
        />
      </div>
      <button
        className={!isValid || !isDirty ? "btn negative bg" : "btn default bg"}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <span className={styles.loadLogin}>
            <ImSpinner size={28} className="spinner" />
          </span>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  );
};
