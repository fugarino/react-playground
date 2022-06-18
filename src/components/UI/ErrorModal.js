import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, handleClose }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={handleClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleClose} text="Okay"></Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
