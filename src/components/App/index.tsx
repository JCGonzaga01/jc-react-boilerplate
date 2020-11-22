import React from "react";
import Header from "components/Header";
import Info from "components/Info";
import Footer from "components/Footer";
import styles from "./App.scss";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
