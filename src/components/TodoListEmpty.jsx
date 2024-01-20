import styles from "../styles/TodoListEmpty.module.css";
const TodoListEmpty = () => {
  return (
    <h1 className={styles.h1}>There is no todos for now. Please add some!!!</h1>
  );
};

export default TodoListEmpty;
