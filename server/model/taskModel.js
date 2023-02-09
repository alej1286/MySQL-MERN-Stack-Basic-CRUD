import mongoose from "mongoose";
const schema = mongoose.Schema;

const taskSchema = new schema(
  {
    title: { type: String },
    description: { type: String },
    done: { type: Boolean },
    createAt: { type: Date, default: Date.now },
  },
  { collection: "tasks" }
);

export default mongoose.model("taskModel", taskSchema);
