import { useEffect,useState } from "react";
import { getTasksRequest } from "../api/tasks.api";

const TaskPage = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }

    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map(task=>(
        <div key={task.id}>
          <h2>{task.title}</h2>
        </div>
      )
      )}
    </div>
  );
};

export default TaskPage;
