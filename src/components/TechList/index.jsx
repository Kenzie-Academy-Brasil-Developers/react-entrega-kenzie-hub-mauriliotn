import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {
  const { techsList } = useContext(TechContext);

  return (
    <div>
      {techsList.length > 0 ? (
        <ul className={styles.techFlex}>
          {techsList.map((techs) => (
            <TechCard key={techs.id} techs={techs} />
          ))}
        </ul>
      ) : (
        <h2 className="title two">Por favor cadastre suas tecnologias </h2>
      )}
    </div>
  );
};
