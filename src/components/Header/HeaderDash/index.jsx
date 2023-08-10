
import Logo from "../../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HeaderDash = ({ userLogout }) => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <img src={Logo} alt="" />
          <button className="btn disable sm" onClick={userLogout}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};
