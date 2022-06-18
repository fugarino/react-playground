import React, { useState } from "react";
import Card from "./components/Card";
import User from "./components/User";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUserData = (userData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, userData];
    });
  };

  return (
    <div className="App">
      <Card getUserData={getUserData} />
      {users.map((user, i) => {
        return <User key={i} username={user.username} age={user.age} />;
      })}
    </div>
  );
}

export default App;
