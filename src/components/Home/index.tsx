import React from "react";
import { bannerDetails } from "constants/home";
import banner from "assets/banner.jpg";
import styles from "./Home.scss";

const Home: React.FC = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${banner}) center center / cover no-repeat fixed`,
      }}
    >
      <div className={styles.banner}>
        <div className={styles.title}>{bannerDetails.title}</div>
        <div className={styles.description}>{bannerDetails.description}</div>
      </div>
    </div>
  );
};

export default Home;
