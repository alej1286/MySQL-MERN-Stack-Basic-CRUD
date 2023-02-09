import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskProvider";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task._id);
  };
  return (
    <div className="bg-zinc-700 rounded-md p-4 text-white">
      <div>
        <header className="flex justify-between">
          <h2 className="text-sm font-bold">{task.title}</h2>
          <span>{task.done == 1 ? "️✅️" : "❌"}</span>
        </header>
        <p className="text-xs">{task.description}</p>
        <span>{task.createAt}</span>
        <div className="flex gap-x-2">
          <button
            className="bg-slate-300 px-2  py-1 text-black"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <button
            className="bg-slate-300 px-2  py-1 text-black"
            onClick={() => {
              navigate(`/edit/${task._id}`);
            }}
          >
            Edit
          </button>
          <button
            className="bg-slate-300 px-2  py-1 text-black"
            onClick={() => {
              handleDone(task.done);
            }}
          >
            Toggle task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
