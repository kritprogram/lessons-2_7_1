import React, { useContext, useState } from "react";
import { AppContext } from "./context";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const context = useContext(AppContext);
  if (!context) return null;
  const { addTodo } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        name="newTodo"
        placeholder="Новая задача"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};
