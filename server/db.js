import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost:27017/mern";

mongoose.set("strictQuery", false);
mongoose.connect(url);

const db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to MongoDB!");
});
db.on("error", () => {
  console.log("Error connecting to MongoDB!");
});
export default db;
