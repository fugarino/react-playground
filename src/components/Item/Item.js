import React from "react";
import classes from "./Item.module.css";

const Item = ({ name, description, price }) => {
  return (
    <div className={classes.item}>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>{price}</h5>
      </div>
      <div className={classes.btnContainer}>
        <div>
          <h5>Amount</h5>
          <input value={1} type="number" />
        </div>
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default Item;
