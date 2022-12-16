import React from "react";
import "./styles/normalize.css";
import styles from "./styles/App.module.scss";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <section className={styles.App__wrapper}>
      <Header />
      <Main />
    </section>
  );
}

export default App;
