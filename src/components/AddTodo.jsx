import { useState } from "react";
import styles from "../styles/AddTodo.module.css";
const AddTodo = ({ addNewTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const onTodoNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const onTodoDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddClick = (event) => {
    if (todoName === null || todoName === undefined || todoName == "") {
      alert("Enter todo name first");
      return;
    }
    if (!todoDate) {
      alert("Enter todo date first");
      return;
    }
    addNewTodo(todoName, todoDate);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        className={styles.input}
        onChange={onTodoNameChange}
      />
      <input
        type="date"
        placeholder="Enter Todo"
        className={styles.input}
        onChange={onTodoDateChange}
      />
      <button
        type="button"
        className={`btn btn-primary ${styles.button}`}
        onClick={handleAddClick}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
