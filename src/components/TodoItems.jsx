import Item from "./Item";
import styles from "../styles/TodoItems.module.css";

const TodoItems = ({ todoList, deleteTodo }) => {
  const handleDeleteClick = (key) => {
    deleteTodo(key);
  };
  return (
    <>
      <div className={styles.container}>
        {todoList.map((todo) => (
          <Item
            key={todo.key}
            todo={todo}
            handleDeleteClick={handleDeleteClick}
          ></Item>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
