import { RegisterForm } from "../../components/forms/RegisterForm";
import { HeaderRegister } from "../../components/Header/HeaderRegister";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <>
      <main className="pageBox slideInTop">
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
