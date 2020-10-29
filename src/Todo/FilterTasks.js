import React from "react";

const FilterTasks = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.setFilter(props.name)}
      aria-pressed={props.isPressed}
    >
      {props.name}
    </button>
  );
};

export default FilterTasks;
