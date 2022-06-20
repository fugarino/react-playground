import React from "react";
import Item from "../Item/Item";
import classes from "./ItemsList.module.css";

const ItemsList = ({ menuItems }) => {
  return (
    <section className={classes.itemsListContainer}>
      <ul>
        {menuItems.map((item) => (
          <Item name={item.name} description={item.description} price={item.price} />
        ))}
      </ul>
    </section>
  );
};

export default ItemsList;
