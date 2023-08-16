import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HeaderDash = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <img className="slideInRight" src={Logo} alt="Kenzie Hub Logo" />
          <button className="btn disable sm slideInLeft" onClick={userLogout}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};
