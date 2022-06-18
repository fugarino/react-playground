import React from "react";
import "./User.css";

const User = ({ username, age }) => {
  return (
    <div className="user">
      <h1>{username}</h1>
      <h3>{`(${age} years old)`}</h3>
    </div>
  );
};

export default User;
