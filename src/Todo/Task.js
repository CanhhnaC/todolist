import React, { useEffect, useRef, useState } from "react";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";

const Task = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newValue, onNewValue] = useInput(props.name);

  const handleKeyPress = useOnEnter(() => {
    if (newValue) {
      props.editTask(props.id, newValue);
      setEditing(false);
    }
  }, [newValue]);

  const editFieldRef = useRef(null);

  const editTemplate = (
    <div className="item">
      <div>
        <input type="checkbox" style={{ visibility: "hidden" }} />
        <input
          id={props.id}
          type="text"
          ref={editFieldRef}
          value={newValue}
          onChange={onNewValue}
          onKeyPress={handleKeyPress}
          onBlur={() => setEditing(false)}
        />
      </div>
    </div>
  );

  const viewTemplate = (
    <div className={props.isCompleted ? "completed item" : "item"}>
      <div>
        <input
          type="checkbox"
          id={props.id}
          checked={props.isCompleted}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label
          onDoubleClick={() => {
            setEditing(true);
          }}
        >
          {props.name}
        </label>
      </div>
      <div>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    </div>
  );

  useEffect(() => {
    if (isEditing) {
      editFieldRef.current.focus();
    }
  }, [isEditing]);

  return <li>{isEditing ? editTemplate : viewTemplate}</li>;
};

export default Task;
