import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ handleClick }) => {
  return (
    <div className="error-modal" onClick={handleClick}>
      <div className="modal-card">
        <header>
          <h2>Invalid input</h2>
        </header>
        <main>
          <p>Please enter a valid name and age.</p>
        </main>
        <footer>
          <button onClick={handleClick} className="btn">
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
