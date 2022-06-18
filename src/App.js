import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userArray, setUserArray] = useState([]);

  const getUserData = (userData) => {
    setUserArray((prevUserArray) => [...prevUserArray, userData]);
  };

  return (
    <div className="App">
      <AddUser getUserData={getUserData} />
      <UsersList users={userArray} />
    </div>
  );
}

export default App;
