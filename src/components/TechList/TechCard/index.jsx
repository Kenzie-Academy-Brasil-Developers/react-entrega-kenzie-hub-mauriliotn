import { MdOutlineMode } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechCard = ({ techs }) => {
  const { deleteTech, setEditingTech, openEditModal } = useContext(TechContext);
  return (
    <li className={styles.techList}>
      <h3 className="title three">{techs.title}</h3>
      <div className={styles.buttonBox}>
        <span className="headline">{techs.status}</span>
        <div>
          <MdOutlineMode
            onClick={() => {
              setEditingTech(techs);
              openEditModal();
            }}
            title="Editar"
            aria-label="edit"
            size={18}
            color="white"
          />
          <RiDeleteBin6Line
            onClick={() => deleteTech(techs.id)}
            title="Remover"
            aria-label="remove"
            size={18}
            color="white"
          />
        </div>
      </div>
    </li>
  );
};
