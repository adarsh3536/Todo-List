import React, { useEffect, useState } from "react";
import "./App.css";
import Items from "./Items";

//To get the data from local storage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  }
  return [];
};

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const addingItems = () => {
    if (input == "") {
      return;
    }
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  //Adding data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

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
            {items &&
              items.length > 0 &&
              items.map((itemVal, index) => {
                return (
                  <Items
                    data={itemVal}
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                  />
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
