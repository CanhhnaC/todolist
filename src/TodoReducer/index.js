import React, { createContext, useMemo, useReducer, useState } from "react";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import { reducer } from "./reducers/useTodo";
import Task from "./Task";
import todoCtx from "./todoCtx";

const tasks = [
  { id: "todo-0", content: "Work", done: false },
  { id: "todo-1", content: "Coding", done: true },
  { id: "todo-2", content: "Running", done: false }
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isCompleted,
  Completed: (task) => task.isCompleted
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, tasks);
  const [filter, setFilter] = useState("All");
  const [newContent, onNewContent, setNewContent] = useInput();

  const handleKeyPress = useOnEnter(() => {
    if (newContent) {
      dispatch({ type: "addTodo", content: newContent });
      setNewContent("");
    }
  }, [newContent]);
  console.log(state);

  const visibleTodos = useMemo(() => state.filter(FILTER_MAP[filter]), [state]);

  return (
    <todoCtx.Provider style={{ marginTop: "50px" }} value={{ dispatch }}>
      <input
        type="text"
        name="text"
        value={newContent}
        onChange={onNewContent}
        onKeyPress={handleKeyPress}
        placeholder="Something"
      />
      <ul>
        {visibleTodos.map((task) => (
          <Task
            id={task.id}
            key={task.id}
            done={task.done}
            content={task.content}
          />
        ))}
      </ul>
    </todoCtx.Provider>
  );
};

export default TodoReducer;
