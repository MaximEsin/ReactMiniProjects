import React from "react";
import styles from "../styles/App.module.scss";
import grid from "../img/grid.svg";

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <img className={styles.hero__img} src={grid} />
      <article className={styles.hero__article}>
        <h1 className={styles.hero__title}>Online Experiences</h1>
        <h2 className={styles.hero__text}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h2>
      </article>
    </section>
  );
};

export default Hero;
