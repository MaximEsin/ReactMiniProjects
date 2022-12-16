import React from "react";
import styles from "../styles/App.module.scss";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <section className={styles.header__wrapper}>
      <section className={styles.header__container}>
        <img src={logo} />
        <h3 className={styles.header__text}>My travel journal</h3>
      </section>
    </section>
  );
};

export default Header;
