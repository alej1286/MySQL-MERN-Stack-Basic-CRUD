import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

const TaskPage = () => {

  const {tasks, loadTasks} = useTasks()
  useEffect(() => {
    

    loadTasks();
  }, []);

  function renderMain(){
    if (tasks.length===0) {
      return <h1>No Tasks Found</h1>
    }

    return tasks.map(task=>(
      <TaskCard  task={task} key={task.id} />
    )
    )
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
};

export default TaskPage;
