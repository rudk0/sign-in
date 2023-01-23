import React from "react";
import cn from "classnames";

import styles from "./checkbox.module.css";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Checkbox = ({ label, ...props }: CheckboxProps) => (
  <label className={styles.container}>
    <input
      type="checkbox"
      className={cn(styles.input, "visually-hidden")}
      {...props}
    />
    <span className={styles.checkbox} />
    {label}
  </label>
);

export default React.memo(Checkbox);
