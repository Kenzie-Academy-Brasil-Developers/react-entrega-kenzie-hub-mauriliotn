import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();

  const pathname = window.location.pathname;

  const userRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      reset();
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("usuário ja cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      toast.success(`Bem vindo, ${data.user.name}`);
      localStorage.setItem("@TOKEN", data.token);
      reset();
      setTimeout(() => {
        setUser(data.user);
        navigate("/dashboard");
        console.log("passei por aqui");
      }, 2200);
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Ops! Algo deu errado. Senha ou e-mail inválido");
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2200);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      getUser();
    }
  }, []);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <UserContext.Provider
      value={{ loading, user, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
