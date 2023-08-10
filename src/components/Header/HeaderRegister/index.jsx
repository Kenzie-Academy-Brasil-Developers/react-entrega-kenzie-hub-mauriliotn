import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HeaderRegister = () => {
  return (
    <header>
      <div className="container sm headerFlex">
        <div className={styles.flexBox}>
          <img src={Logo} alt="" />
          <Link className="btn disable md" to="/">
            Voltar
          </Link>
        </div>
      </div>
    </header>
  );
};
