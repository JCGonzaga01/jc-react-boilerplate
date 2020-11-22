import React from "react";
import { classNames } from "helpers/functions";
import styles from "./Spinner.module.scss";

type Props = {
  className?: string;
};

const Spinner: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <svg className={styles.container} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className={styles.spinner} cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
};

export default Spinner;
