import React from "react";
import classes from "./Button.module.css";

const Button = ({ icon, text, itemCount, toggleCart }) => {
  return (
    <button className={classes.button} onClick={toggleCart}>
      <h3>
        {icon} {text}
      </h3>
      <div>{itemCount}</div>
    </button>
  );
};

export default Button;
