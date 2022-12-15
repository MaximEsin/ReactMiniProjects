import React from "react";
import styles from "../styles/App.module.scss";
import T from "../img/T.svg";
import Fb from "../img/Fb.svg";
import I from "../img/I.svg";
import Gh from "../img/Gh.svg";

const Footer = () => {
  return (
    <section className={styles.footer__wrapper}>
      <section className={styles.footer__container}>
        <a href="https://twitter.com/MaximEsin21">
          <img className={styles.footer__icon} src={T} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100079818468864">
          <img className={styles.footer__icon} src={Fb} />
        </a>
        <a href="https://www.instagram.com/maximessin/">
          <img className={styles.footer__icon} src={I} />
        </a>
        <a href="https://github.com/MaximEsin">
          <img className={styles.footer__icon} src={Gh} />
        </a>
      </section>
    </section>
  );
};

export default Footer;
