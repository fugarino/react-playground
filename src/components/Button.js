import React from "react";
import "./Button.css";

const Button = ({ submit }) => {
  return (
    <button type={submit} className="button">
      Add User
    </button>
  );
};

export default Button;
