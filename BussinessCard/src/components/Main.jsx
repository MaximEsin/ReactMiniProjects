import React from "react";
import styles from "../styles/App.module.scss";

const Main = () => {
  return (
    <section className={styles.main__container}>
      <h1 className={styles.main__title}>Maxim Esin</h1>
      <h2 className={styles.main__dev}>Frontend Developer</h2>
      <a href="https://github.com/MaximEsin">
        <button className={styles.main__btn}>GitHub</button>
      </a>
    </section>
  );
};

export default Main;
