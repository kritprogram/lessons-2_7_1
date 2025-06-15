import { useState } from "react";
import { useTodos } from "./hooks/useTodos"; // ваш хук
import { TodoControls } from "./TodoControls";
import { AddTodo } from "./AddTodo";
import { AppContext } from "./context";
import Spinner from "./components/spinner/Spinner";
import TodoList from "./components/TodoList";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const todoData = useTodos(searchTerm, sortAlphabetically);

  return (
    <AppContext
      value={{
        ...todoData,
        searchTerm,
        setSearchTerm,
        sortAlphabetically,
        setSortAlphabetically,
      }}
    >
      <div className="app">
        <h1>Список задач</h1>
        <TodoControls />
        <AddTodo />
        {todoData.loading && <Spinner />}
        {todoData.error && <p>Ошибка: {todoData.error}</p>}
        <TodoList />
      </div>
    </AppContext>
  );
};
