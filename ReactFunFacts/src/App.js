import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import "./styles/normalize.css";
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <section className={styles.App}>
      <Header />
      <Main />
    </section>
  );
}

export default App;
