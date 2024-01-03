import { createContext } from "react";
export const ItemsContext = createContext({
  items: [],
  addTodoItem: () => {},
  deleteItem: () => {},
});
