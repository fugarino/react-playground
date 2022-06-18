import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ getUserData }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userData = {
      username,
      age,
      id: Math.random().toString(),
    };
    getUserData(userData);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal handleClose={handleError} title={error.title} message={error.message} />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input value={username} id="username" type="text" onChange={handleUsernameChange} />
          <label htmlFor="age">Age (Years)</label>
          <input value={age} id="age" type="text" onChange={handleAgeChange} />
          <Button type="submit" text="Add" onClick={handleSubmit}></Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
