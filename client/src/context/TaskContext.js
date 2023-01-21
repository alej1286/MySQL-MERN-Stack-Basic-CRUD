import { createContext } from "react";

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  return <TaskContext.Provider>{children}</TaskContext.Provider>;
};
