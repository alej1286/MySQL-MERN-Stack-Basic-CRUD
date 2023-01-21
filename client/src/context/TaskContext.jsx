import { createContext } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  return <TaskContext.Provider value={{text:`Hello World`}}>{children}</TaskContext.Provider>;
};
