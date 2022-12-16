import React from "react";
import styles from "../styles/App.module.scss";
import marker from "../img/marker.svg";

const Card = (props) => {
  return (
    <section className={styles.card__container}>
      <img className={styles.card__img} src={props.img} />
      <section className={styles.card__main}>
        <section className={styles.card__head}>
          <section className={styles.card__head__location}>
            <img src={marker} />
            <h3 className={styles.card__head__location__country}>
              {props.country}
            </h3>
            <a
              className={styles.card__head__location__gmaps}
              href={props.location}
            >
              <p>View on Google Maps</p>
            </a>
          </section>
          <h2 className={styles.card__head__title}>{props.name}</h2>
        </section>
        <section className={styles.card__body}>
          <h3 className={styles.card__body__date}>{props.date}</h3>
          <h4 className={styles.card__body__desc}>{props.desc}</h4>
        </section>
      </section>
    </section>
  );
};

export default Card;
