import React from "react";
import classes from "./CartModal.module.css";
import CartModalList from "./CartModalList";

const CartModal = ({ toggleCart, addedMeals }) => {
  return (
    <div
      id="modal-container"
      className={classes.modal}
      onClick={(e) => {
        if (e.target.id === "modal-container") {
          toggleCart();
        }
      }}
    >
      <main>
        <div>
          <CartModalList addedMeals={addedMeals} />
        </div>
        <button onClick={toggleCart}>Close</button>
      </main>
    </div>
  );
};

export default CartModal;
