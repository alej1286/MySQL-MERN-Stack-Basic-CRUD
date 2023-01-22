import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
  return (
    <div>
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
        <span>{task.createAt}</span>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            navigate(`/edit/${task.id}`);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDone(task.done);
          }}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
