import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Select = forwardRef(({ children, error, label, ...rest }, ref) => {
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    setRotate(!rotate);
  };
  return (
    <div className={styles.selectBox}>
      <label className="label">{label} </label>
      <div className={styles.selectGrid}>
        <select
          onClick={handleClick}
          className={styles.input}
          ref={ref}
          {...rest}
        >
          {children}
        </select>
        <MdOutlineKeyboardArrowDown className={rotate ? styles.rotate : ""} />
      </div>
      {error ? <p className="headline">{error.message}</p> : null}
    </div>
  );
});
