import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Taskform from "./pages/Taskform";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div
      className={`w-full mx-auto h-screen 
    ${darkMode ? "dark" : ""}`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<Taskform />} />
            <Route path="/edit/:id" element={<Taskform />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
