import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import database from "./db.js";


const PORT  = process.env.PORT || 3000
const app = express();

app.use(express.json());

const corsConf = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


app.use(cors(corsConf));
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
