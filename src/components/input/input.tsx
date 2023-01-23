import React, { useCallback } from "react";

import styles from "./input.module.css";

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  id: string;
  label: string;
  onChange: (value: string) => void;
};

const Input = ({ id, label, onChange, ...props }: InputProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <label htmlFor={id}>
      <span className={styles.label}>{label}</span>

      <input
        id={id}
        className={styles.input}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};

export default React.memo(Input);
