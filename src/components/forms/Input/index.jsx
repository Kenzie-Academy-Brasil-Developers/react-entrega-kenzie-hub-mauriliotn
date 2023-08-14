import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, animationClass, ...rest }, ref) => {
  return (
    <div className={`${styles.inputBox} ${animationClass}`}>
      <label className="label">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className="headline">{error.message}</p> : null}
    </div>
  );
});
