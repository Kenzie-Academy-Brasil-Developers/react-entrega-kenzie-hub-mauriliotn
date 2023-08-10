import { RegisterForm } from "../../components/forms/RegisterForm";
import styles from "./style.module.scss";
import { HeaderRegister } from "../../components/Header/HeaderRegister";

export const RegisterPage = () => {
  return (
    <>
      <main className="pageBox">
        <HeaderRegister />
        <div className={`container sm ${styles.flexBox}`}>
          <h1 className="title one">Crie sua conta</h1>
          <p className="headline">Rapido e grátis, vamos nessa</p>
          <RegisterForm />
        </div>
      </main>
    </>
  );
};
