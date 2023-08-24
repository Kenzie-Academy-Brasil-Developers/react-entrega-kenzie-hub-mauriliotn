import { EditModalForm } from "../../forms/ModalForm/EditModalForm";
import { MdClose } from "react-icons/md";
import { useKeydown } from "../../../hooks/useKeydown";
import { useOutclick } from "../../../hooks/useOutClick";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const EditTechModal = () => {
  const { closeModal } = useContext(TechContext);

  const ref = useOutclick(() => closeModal());
  useKeydown("Escape", () => closeModal());

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={ref} className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <h3 className="title three">Tecnologia Detalhes</h3>
          <button onClick={closeModal}>
            <MdClose size={24} color="#868E96" />
          </button>
        </div>
        <div className={styles.modalForm}>
          <EditModalForm />
        </div>
      </div>
    </div>
  );
};
