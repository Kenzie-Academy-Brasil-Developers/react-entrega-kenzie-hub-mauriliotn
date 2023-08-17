import { HeaderDash } from "../../components/Header/HeaderDash";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./style.module.scss";

export const DashBoardPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <main>
        <HeaderDash />
        <div className={styles.userFlex}>
          <div className="container slideInBotton">
            <h1 className="title one">Olá, {user?.name}</h1>
            <p className="headline">{user?.course_module}</p>
          </div>
        </div>
        <div className="container slideInTop">
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
