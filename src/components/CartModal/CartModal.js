import React from "react";
import classes from "./CartModal.module.css";

const CartModal = ({ toggleCart }) => {
  return (
    <div
      id="modal-container"
      className={classes.modal}
      onClick={(e) => {
        console.log(e.target.id);
      }}
    >
      <div>
        <button onClick={toggleCart}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
