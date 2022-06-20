import React from "react";
import classes from "./Button.module.css";

const Button = ({ icon, text, itemsCount }) => {
  return (
    <button className={classes.button}>
      <h3>
        {icon} {text}
      </h3>
      <div>{itemsCount}</div>
    </button>
  );
};

export default Button;
