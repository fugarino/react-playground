import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick} type={type || "button"}>
      {text}
    </button>
  );
};

export default Button;
