import { Routes, Route } from "react-router-dom";
import Taskform from "./pages/Taskform";
import TaskPage from "./pages/TaskPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<Taskform />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
