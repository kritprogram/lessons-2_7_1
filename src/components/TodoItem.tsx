import { useContext, useState } from "react";
import type { Todo } from "../hooks/useTodos";
import { FaEdit, FaSave, FaTrash, FaWindowClose } from "react-icons/fa";
import { AppContext } from "../context";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingTitle, setEditingTitle] = useState<string>(todo.title);

  const context = useContext(AppContext);
  if (!context) return null;
  const { updateTodo, deleteTodo } = context;
  const handleSave = () => {
    updateTodo({ ...todo, title: editingTitle });
    setIsEditing(false);
  };

  const handleToggleCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, completed: e.target.checked });
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="checkbox"
            id={`todo_checkbox_${todo.id}`}
            checked={todo.completed}
            onChange={handleToggleCompleted}
          />
          <input
            type="text"
            id={`editTodoInput_${todo.id}`}
            name="editTodo"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave} title="Сохранить">
            <FaSave />
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              setIsEditing(false);
              setEditingTitle(todo.title);
            }}
            title="Отмена"
          >
            <FaWindowClose />
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            id={`todo_checkbox_${todo.id}`}
            checked={todo.completed}
            onChange={handleToggleCompleted}
          />
          <label htmlFor={`todo_checkbox_${todo.id}`}>{todo.title}</label>
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
            title="Редактировать"
          >
            <FaEdit />
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteTodo(todo.id)}
            title="Удалить"
          >
            <FaTrash />
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
