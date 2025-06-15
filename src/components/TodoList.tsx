import { useContext } from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../context";

const TodoList = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { todos } = context;
  if (todos.length === 0) {
    return <p>Задачи отсутствуют</p>;
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
