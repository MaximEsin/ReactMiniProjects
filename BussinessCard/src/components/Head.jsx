import React from "react";
import photo from "../img/I.png";
import styles from "../styles/App.module.scss";

const Head = () => {
  return (
    <section className={styles.photo__container}>
      <img className={styles.photo} src={photo} alt="My photo" />
    </section>
  );
};

export default Head;
