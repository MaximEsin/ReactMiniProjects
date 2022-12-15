import React from "react";
import styles from "../styles/App.module.scss";

const Article = ({ Title, Text }) => {
  return (
    <section className={styles.articel__wrapper}>
      <article className={styles.article__section}>
        <h2 className={styles.article__title}>{Title}</h2>
        <h4 className={styles.article__text}>{Text}</h4>
      </article>
    </section>
  );
};

export default Article;
