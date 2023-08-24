import { HeaderDash } from "../../components/Header/HeaderDash";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ButtonPlus } from "../../components/ButtonPlus";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/modal/CreateTechModal";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../../components/modal/EditTechModal";
import styles from "./style.module.scss";

export const DashBoardPage = () => {
  const { user } = useContext(UserContext);
  const { createIsOpen, editIsOpen, openCreateModal } = useContext(TechContext);

  return (
    <>
      <main>
        <HeaderDash />
        <section className={styles.userFlex}>
          <div className="container slideInBotton">
            <h1 className="title one">Olá, {user?.name}</h1>
            <p className="headline">{user?.course_module}</p>
          </div>
        </section>

        <section className="container slideInTop">
          <div className={styles.contentFlex}>
            <h1 className="title two">Tecnologias</h1>
            <button onClick={openCreateModal} className={styles.plus}>
              <ButtonPlus />
            </button>
          </div>
          <TechList />
        </section>
        {createIsOpen ? <CreateTechModal /> : null}
        {editIsOpen ? <EditTechModal /> : null}
      </main>
    </>
  );
};
