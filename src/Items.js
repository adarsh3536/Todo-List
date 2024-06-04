import React from "react";

const Items = (props) => {
  return (
    <div className="content">
      <li>
        &nbsp;
        {props.id + 1 + "."}
        &nbsp;
        {props.data}
      </li>
      <div
        className="delete"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        &#128473; &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Items;

//Should not add an empty todo
//Number on the left side of data and "x" delete button on the right
//Align items center - Sr.Number, Delete, Data
//Multiple items - Scroll

//Store data on local storage - Try
