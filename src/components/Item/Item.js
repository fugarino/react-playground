import React, { useState } from "react";
import classes from "./Item.module.css";

const Item = ({ name, description, price, handleAdd }) => {
  const [amount, setAmount] = useState(1);

  const itemData = {
    name,
    description,
    price,
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleClick = () => {
    handleAdd(itemData, amount);
  };

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
          <input value={amount} type="number" min={1} onChange={handleChange} />
        </div>
        <button onClick={handleClick}>+ Add</button>
      </div>
    </div>
  );
};

export default Item;
