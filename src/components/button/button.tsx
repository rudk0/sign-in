import React from "react";
import cn from "classnames";

import styles from "./button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles.button, className)}
    />
  );
}
