import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks/:id", getTask);

router.get("/tasks", getTasks);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
