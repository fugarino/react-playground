import React from "react";
import Form from "./Form";
import "./Card.css";

const Card = ({ getUserData }) => {
  return (
    <div className="card-container">
      <div className="card">
        <Form getUserData={getUserData} />
      </div>
    </div>
  );
};

export default Card;
