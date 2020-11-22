import React from "react";
import assets from "assets";
import styles from "./Footer.scss";

const Footer: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.imgContainer}>
      <a href={"[YOUR GITHUB ACCOUNT]"} target={"_blank"}>
        <img src={assets.github} alt={"Github"} />
      </a>
      <a href={"[YOUR LINKEDIN ACCOUNT]"} target={"_blank"}>
        <img src={assets.linkedin} alt={"LinkedIn"} />
      </a>
      <a href={"mailto:[YOUR EMAIL ADDRESS]"} target={"_blank"}>
        <img src={assets.email} alt={"Email"} />
      </a>
    </div>
    <div className={styles.myName}>© [YOUR NAME GOES HERE]</div>
  </div>
);

export default Footer;
