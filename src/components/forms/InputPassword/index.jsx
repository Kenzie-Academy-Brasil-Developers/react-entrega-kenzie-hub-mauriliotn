import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ error, label, animationClass, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={`${styles.inputBox} ${animationClass}`}>
      <label className="label">{label}</label>
      <div className={styles.inputGrid}>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
      {error ? <p className="headline">{error.message}</p> : null}
    </div>
  );
});
