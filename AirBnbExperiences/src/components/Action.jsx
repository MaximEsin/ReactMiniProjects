import React from "react";
import styles from "../styles/App.module.scss";
import ActionCard from "./ActionCard";
import dude1 from "../img/dude1.svg";
import dude2 from "../img/dude2.svg";
import dude3 from "../img/dude3.svg";

const Action = () => {
  return (
    <section className={styles.action__container}>
      <ActionCard
        box__text={"SOLD OUT"}
        img={dude1}
        rating={"5"}
        views={"6"}
        description={"Life lessons with Katie Zaferes"}
        price={"From $136"}
      />

      <ActionCard
        box__text={"ONLINE"}
        img={dude2}
        rating={"5"}
        views={"30"}
        description={"Learn wedding photography"}
        price={"From $125"}
      />

      <ActionCard
        box__text={"ONLINE"}
        img={dude3}
        rating={"4.8"}
        views={"2"}
        description={"Group Mountain Biking"}
        price={"From $50"}
      />
    </section>
  );
};

export default Action;
