import React from "react";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";

const AddTask = (props) => {
  const [newValue, onNewValue, setNewValue] = useInput();

  const handleKeyPress = useOnEnter(() => {
    if (newValue) {
      props.addTask(newValue);
      setNewValue("");
    }
  }, [newValue]);

  return (
    <div className="add-task">
      <input
        type="text"
        name="text"
        autoComplete="off"
        value={newValue}
        onChange={onNewValue}
        onKeyPress={handleKeyPress}
        placeholder="What neeed to be done?"
      />
    </div>
  );
};

export default AddTask;

// const [name, setName] = useState("");
// function handleToKeyDown(e) {
//   if (e.keyCode !== 13) {
//     return;
//   }
//   e.preventDefault();
//   if (!name.trim()) {
//     return;
//   }
//   props.addTask(name);
//   setName("");
// }
// function handleChange(e) {
//   setName(e.target.value);
// }
