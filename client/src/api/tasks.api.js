import axios from "axios";

export const getTasksRequest = async () => {
  return await axios.get("http://localhost:5000/tasks");
};

export const createTaskRequest = async (task) => {
  return await axios.post(`http://localhost:5000/tasks`, task);
};

export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:5000/tasks/${id}`);
};
