import { nanoid } from "nanoid";
import React, { useState } from "react";
import AddTask from "./AddTask";
import FilterTasks from "./FilterTasks";
import Task from "./Task";

import "./todo.css";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.isCompleted,
  Completed: (task) => task.isCompleted
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Todo = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  // AddTask.js
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, isCompleted: false };
    setTasks([...tasks, newTask]);
  }

  // TaskList.js
  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  }

  function toggleTaskCompleted(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updateTask);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Task
        id={task.id}
        key={task.id}
        name={task.name}
        isCompleted={task.isCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    ));

  // FilterTask.js
  const filterList = FILTER_NAMES.map((name) => (
    <FilterTasks
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function clearCompleted() {
    const taskNotComplete = tasks.filter((task) => !task.isCompleted);
    setTasks(taskNotComplete);
  }

  // Counter task left and task completed
  const taskLeft = tasks.filter(FILTER_MAP["Active"]).length;
  const taskComplete = tasks.filter(FILTER_MAP["Completed"]).length;

  return (
    <div className="todo">
      <AddTask addTask={addTask} />

      {taskList.length !== 0 && <ul className="task-list">{taskList}</ul>}

      <div style={{ position: "relative" }}>
        {tasks.length !== 0 && (
          <div className="footer">
            <span>{taskLeft} left</span>
            <div>{filterList}</div>
            {taskComplete ? (
              <button onClick={clearCompleted}>Clear completed</button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
