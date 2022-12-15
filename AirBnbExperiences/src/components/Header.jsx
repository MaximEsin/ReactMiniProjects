import React from "react";
import styles from "../styles/App.module.scss";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <section className={styles.header__container}>
      <img className={styles.header__logo} src={logo} />
    </section>
  );
};

export default Header;
