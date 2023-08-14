import { forwardRef, useState } from "react";
import styles from "./style.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Select = forwardRef(
  ({ children, error, label, animationClass, ...rest }, ref) => {
    const [rotate, setRotate] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const handleClick = (event) => {
      setSelectedOption(event.target.value);
      setRotate(!rotate);
    };
    return (
      <div className={`${styles.selectBox} ${animationClass}`}>
        <label className="label">{label} </label>
        <div className={styles.selectGrid}>
          <select
            onClick={handleClick}
            className={
              selectedOption === ""
                ? `${styles.selectDefault}`
                : `${styles.selectSelected}`
            }
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
  }
);
