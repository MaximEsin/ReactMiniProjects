import React from "react";
import logo from "../img/Logo.svg";
import styles from "../styles/styles.module.scss";

const Header = () => {
  return (
    <header className={styles.nav__wrapper}>
      <nav className={styles.nav__container}>
        <img src={logo} className={styles.nav__img} alt="Logo" />
        <h2 className={styles.nav__logo__text}>React Facts</h2>
        <ul className={styles.nav__items}>
          <a className={styles.nav__item} href="https://reactjs.org/">
            <li>About</li>
          </a>
          <a
            className={styles.nav__item}
            href="https://reactjs.org/docs/getting-started.html"
          >
            <li>Documents</li>
          </a>
          <a
            className={styles.nav__item}
            href="https://reactjs.org/community/support.html"
          >
            <li>Support</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
