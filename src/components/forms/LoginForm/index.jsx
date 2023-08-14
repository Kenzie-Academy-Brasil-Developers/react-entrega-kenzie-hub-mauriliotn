import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useState } from "react";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner } from "react-icons/im";
import styles from "./style.module.scss";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      console.log(data);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Ops! Algo deu errado", {
          theme: "dark",
          autoClose: 1500,
        });
      } else {
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userLogin(formData);
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
        className={
          errors && Object.keys(errors).length > 0
            ? "btn negative bg"
            : "btn default bg"
        }
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
