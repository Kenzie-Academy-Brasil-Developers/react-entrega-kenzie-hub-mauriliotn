import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

import { LoginForm } from "../../components/forms/LoginForm";

export const LoginPage = ({ setUser }) => {
  return (
    <>
      <main className="pageBox">
        <img src={Logo} alt="Kenzie Hub Logo" />
        <div className={`container sm ${styles.flexBox}`}>
          <h2 className="title one">Login</h2>
          <LoginForm setUser={setUser} />
          <div>
            <p className="headline bold">Ainda não possui uma conta?</p>
            <Link className="btn disable bg" to="/register">
              Cadastre-se
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
