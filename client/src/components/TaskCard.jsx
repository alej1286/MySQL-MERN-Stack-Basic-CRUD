import React from "react";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";

const TaskCard = ({ task }) => {

  const {deleteTask} = useTasks();
  

  return (
    <div>
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done === 1 ? "Done" : "UnDone"}</span>
        <span>{task.createAt}</span>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;