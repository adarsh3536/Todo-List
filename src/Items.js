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


