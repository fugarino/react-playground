import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import classes from "./Navbar.module.css";

const Navbar = ({ heading }) => {
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <nav className={classes.nav}>
      <h1>{heading}</h1>
      <Button icon={cartIcon} text="Your Cart" itemsCount={2}></Button>
    </nav>
  );
};

export default Navbar;
