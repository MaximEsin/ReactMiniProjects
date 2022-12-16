import React from "react";
import "./styles/normalize.css";
import styles from "./styles/App.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Action from "./components/Action";

function App() {
  return (
    <section className={styles.App__wrapper}>
      <section className={styles.App__container}>
        <Header />
        <Hero />
        <Action />
      </section>
    </section>
  );
}

export default App;
