import React from "react";
import { deleteTaskRequest } from "../api/tasks.api";

const TaskCard = ({ task }) => {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done === 1 ? "Done" : "UnDone"}</span>
        <span>{task.createAt}</span>
        <button
          onClick={() => {
            handleDelete(task.id);
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
