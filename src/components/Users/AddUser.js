import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = ({ getUserData }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
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
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username} id="username" type="text" onChange={handleUsernameChange} />
        <label htmlFor="age">Age (Years)</label>
        <input value={age} id="age" type="text" onChange={handleAgeChange} />
        <Button type="submit" text="Add" onClick={handleSubmit}></Button>
      </form>
    </Card>
  );
};

export default AddUser;
