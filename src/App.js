import React, { useState } from "react";
import "./App.css";
import Items from "./Items";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addingItems = () => {
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  return (
    <>
      <div className="full-page">
        <div className="main">
          <h2 className="heading">ToDo List</h2>
          <input
            className="input"
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={inputChangeHandler}
          />
          <button onClick={addingItems} className="btn">
            +
          </button>
          <ol>
            {items.map((itemVal) => {
              return <Items data={itemVal} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
