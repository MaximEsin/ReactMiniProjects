import React from "react";
import styles from "../styles/styles.module.scss";
import icon from "../img/icon.svg";

const Main = () => {
  return (
    <section className={styles.main__wrapper}>
      <main className={styles.main__container}>
        <h1 className={styles.main__title}>Fun facts about React</h1>
        <ul className={styles.main__ul}>
          <li className={styles.main__item}>Was released in 2013</li>
          <li className={styles.main__item}>
            Was originally created by Jordan Walke
          </li>
          <li className={styles.main__item}>
            Has well over 100K stars on GitHub
          </li>
          <li className={styles.main__item}>Is maintained by facebook</li>
          <li className={styles.main__item}>
            Powers thousands of enterprice apps, including mobile apps
          </li>
        </ul>
        <img className={styles.main__icon} src={icon} alt="Icon" />
      </main>
    </section>
  );
};

export default Main;
