import spinner from "../../assets/LoadSpinner.svg";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
export const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <img className={styles.blink} src={logo} alt="Logo" />
      <img src={spinner} alt="Carregando" />
    </div>
  );
};
