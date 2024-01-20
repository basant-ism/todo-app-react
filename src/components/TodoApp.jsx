import { useState } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoItems from "./TodoItems";
import TodoListEmpty from "./TodoListEmpty";

const TodoApp = () => {
  let [todoList, setTodoList] = useState([]);
  let [counter, setCounter] = useState(1);

  const addNewTodo = (name, date) => {
    const newTodo = {
      name: name,
      date: date,
      key: counter,
    };
    setCounter(counter + 1);
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.key != id;
    });

    setTodoList(newTodoList);
  };

  return (
    <>
      <Header></Header>
      <AddTodo addNewTodo={addNewTodo}></AddTodo>
      {todoList.length === 0 && <TodoListEmpty></TodoListEmpty>}
      <TodoItems todoList={todoList} deleteTodo={deleteTodo}></TodoItems>
    </>
  );
};

export default TodoApp;
