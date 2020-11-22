import React from "react";
import assets from "assets";
import styles from "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href={"/"} target={"_self"}>
          <img src={assets.headerLogo} alt={"Header Logo"} className={styles.headerLogo} />
        </a>
        <div className={styles.menu}>
          <a href={"/"} target={"_self"}>
            {"Home"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
