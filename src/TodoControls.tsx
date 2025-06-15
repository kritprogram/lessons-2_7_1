import { useContext } from "react";
import { AppContext } from "./context";

export const TodoControls = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const {
    searchTerm,
    setSearchTerm,
    sortAlphabetically,
    setSortAlphabetically,
  } = context;

  return (
    <div className="controls">
      <input
        type="search"
        name="search"
        placeholder="Поиск дел..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortAlphabetically((prev) => !prev)}>
        {sortAlphabetically
          ? "Отключить сортировку"
          : "Сортировать по алфавиту"}
      </button>
    </div>
  );
};
