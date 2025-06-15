import { createContext } from "react";
import type { Todo } from "./hooks/useTodos";

interface AppContextType {
  todos: Array<Todo>;
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortAlphabetically: boolean;
  setSortAlphabetically: (update: (prev: boolean) => boolean) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
