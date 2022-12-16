import React from "react";
import styles from "../styles/App.module.scss";
import star from "../img/star.svg";
import dot from "../img/dot.svg";

const ActionCard = (props) => {
  return (
    <section className={styles.card__container}>
      <section className={styles.card__hero}>
        <img src={props.img} />
        <div className={styles.card__box}>
          <p className={styles.card__box__text}>{props.box__text}</p>
        </div>
      </section>
      <section className={styles.card__body}>
        <section className={styles.card__rating}>
          <img src={star} />
          <p className={styles.card__rating__number}>{props.rating}</p>
          <p className={styles.card__rating__country}>
            ({props.views}){" "}
            <img className={styles.card__rating__dot} src={dot} /> USA
          </p>
        </section>
        <h4 className={styles.card__description}>{props.description}</h4>
        <h4 className={styles.card__description}>
          <span>{props.price}</span> / person
        </h4>
      </section>
    </section>
  );
};

export default ActionCard;
