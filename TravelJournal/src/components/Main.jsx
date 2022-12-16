import React from "react";
import styles from "../styles/App.module.scss";
import Card from "./Card";
import Data from "./Data";

const dataElements = Data.map((item) => {
  return (
    <Card
      img={item.img}
      country={item.country}
      location={item.location}
      name={item.name}
      date={item.date}
      desc={item.desc}
    />
  );
});

const Main = () => {
  return (
    <section className={styles.main__wrapper}>
      <section className={styles.main__container}>{dataElements}</section>
    </section>
  );
};

export default Main;
