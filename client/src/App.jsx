import { Routes, Route } from "react-router-dom";
import Taskform from "./pages/Taskform";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";

const App = () => {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<Taskform />} />
        <Route path="/edit/:id" element={<Taskform />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
};

export default App;
