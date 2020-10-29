import React from "react";
import EffectHooks from "./EffectHooks";
import "./styles.css";
import Todo from "./Todo";
import TodoReducer from "./TodoReducer";

const DATA = [
  { id: "todo-0", name: "Work", isCompleted: false },
  { id: "todo-1", name: "Coding", isCompleted: true },
  { id: "todo-2", name: "Running", isCompleted: false }
];

export default function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <Todo tasks={DATA} />
      <TodoReducer tasks={DATA} />
      <EffectHooks />
    </div>
  );
}
