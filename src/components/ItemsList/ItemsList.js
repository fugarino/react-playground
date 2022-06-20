import React from "react";
import Item from "../Item/Item";
import classes from "./ItemsList.module.css";

const ItemsList = ({ menuItems, handleAdd }) => {
  return (
    <section className={classes.itemsListContainer}>
      <ul>
        {menuItems.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            handleAdd={handleAdd}
          />
        ))}
      </ul>
    </section>
  );
};

export default ItemsList;
