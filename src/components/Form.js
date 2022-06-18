import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import Button from "./Button";
import "./Form.css";

const Form = ({ getUserData }) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      age,
    };
    if (username === "" || age === "" || age < 0) {
      setError(true);
    } else {
      getUserData(userData);
    }
    setUserName("");
    setAge("");
  };
  const handleClose = (e) => {
    if (e.target.className === "error-modal" || e.target.className === "btn") {
      setError(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error ? <ErrorModal handleClick={handleClose} /> : ""}
      <label>Username</label>
      <input value={username} onChange={handleUsernameChange} />
      <label>Age(Years)</label>
      <input value={age} onChange={handleAgeChange} />
      <Button submit="submit" />
    </form>
  );
};

export default Form;
