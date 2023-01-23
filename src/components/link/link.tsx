import React from "react";
import cn from "classnames";

import styles from "./link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ className, ...props }: LinkProps) => (
  <a
    {...props}
    className={cn(styles.link, className)}
  />
);
