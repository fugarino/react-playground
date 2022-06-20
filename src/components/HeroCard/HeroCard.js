import React from "react";
import classes from "./HeroCard.module.css";

const HeroCard = ({ heading, text1, text2 }) => {
  return (
    <section className={classes.heroCard}>
      <div>
        <h1>{heading}</h1>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </section>
  );
};

export default HeroCard;
