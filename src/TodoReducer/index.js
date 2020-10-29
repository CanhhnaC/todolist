import React, { useReducer } from "react";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import { reducer } from "./reducers/useTodo";
import Task from "./Task";

const tasks = [];

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, tasks);
  const [newContent, onNewContent, setNewContent] = useInput();

  const handleKeyPress = useOnEnter(() => {
    if (newContent) {
      dispatch({ type: "addTodo", content: newContent });
      setNewContent("");
    }
  }, [newContent]);

  const taskList = state.map((task) => (
    <Task id={task.id} key={task.id} content={task.content} />
  ));

  return (
    <div style={{ marginTop: "50px" }}>
      <input
        type="text"
        name="text"
        value={newContent}
        onChange={onNewContent}
        onKeyPress={handleKeyPress}
        placeholder="Something"
      />
      <ul>{taskList}</ul>
    </div>
  );
};

export default TodoReducer;
