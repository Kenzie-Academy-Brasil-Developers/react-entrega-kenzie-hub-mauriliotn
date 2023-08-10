import { HeaderDash } from "../../components/Header/HeaderDash";
import styles from "./style.module.scss";

export const DashBoardPage = ({ user, userLogout }) => {
  return (
    <>
      <main>
        <HeaderDash userLogout={userLogout} />
        <div className={styles.userFlex}>
          <div className="container">
            <h1 className="title one">Olá, {user?.name}</h1>
            <p className="headline">Primeiro módulo (Introdução ao Frontend)</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.contentFlex}>
            <h1 className="title one">
              Que pena! Estamos em desenvolvimento :(
            </h1>
            <p className="headline">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
