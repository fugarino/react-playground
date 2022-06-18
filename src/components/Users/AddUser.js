import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ getUserData }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleError = () => {
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userData = {
      enteredName,
      enteredAge,
      id: Math.random().toString(),
    };
    getUserData(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal handleClose={handleError} title={error.title} message={error.message} />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="text" />
          <Button type="submit" text="Add" onClick={handleSubmit}></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
