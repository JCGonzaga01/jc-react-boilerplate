import React from "react";
import Header from "components/Header";
import Info from "components/Info";
import Footer from "components/Footer";
import styles from "./App.scss";

const App: React.FC = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
