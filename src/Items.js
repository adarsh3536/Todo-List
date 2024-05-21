import React from "react";

const Items = (props) => {
  return (
    <div>
      <li>
        <p
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          &#128473; &nbsp;
        </p>
        {props.data}
      </li>
    </div>
  );
};

export default Items;
