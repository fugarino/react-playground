import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ handleClose }) => {
  return <div className={classes.backdrop} onClick={handleClose}></div>;
};

const ModalOverlay = ({ title, message, handleClose }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, handleClose }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop handleClose={handleClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay title={title} message={message} handleClose={handleClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
