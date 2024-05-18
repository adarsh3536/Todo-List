import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="full-page">
        <div className="main">
          <h2 className="heading">ToDo List</h2>
          <input className="input" type="text" placeholder="Add a task" />
          <button className="btn">+</button>
          <ol>
            <li>Buy Mango</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
