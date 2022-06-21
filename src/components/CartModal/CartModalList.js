import React from "react";
// import classes from "./CartModalList.module.css";

const CartModalList = ({ addedMeals }) => {
  return (
    <div>
      {addedMeals.map((meal) => (
        <h1>{meal.name}</h1>
      ))}
    </div>
  );
};

export default CartModalList;
