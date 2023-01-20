import axios from "axios";

export const createTaskRequest = async (task) => {
  return await axios.post(`http://localhost:5000/tasks`, task);
};
