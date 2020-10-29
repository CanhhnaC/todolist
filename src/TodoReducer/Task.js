import React, { useContext } from "react";
import todoCtx from "./todoCtx";

const Task = (props) => {
  const ctx = useContext(todoCtx);
  return (
    <li>
      <input
        type="checkbox"
        checked={props.done}
        onChange={() => ctx.dispatch({ type: "toggleDone", id: props.id })}
      />
      <label> {props.content}</label>
      <button
        onClick={() => ctx.dispatch({ type: "deleteTodo", id: props.id })}
      >
        X
      </button>
    </li>
  );
};

export default Task;
