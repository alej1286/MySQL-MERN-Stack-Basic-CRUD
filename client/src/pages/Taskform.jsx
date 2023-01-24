import { Form, Formik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskProvider";

const Taskform = () => {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: ``,
    description: ``,
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
            setTask(values);
          } else {
            await createTask(values);
            //actions.resetForm();
          }
          navigate(`/`);
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-auto"
          >
            <h1 className="text-xl font-bold uppercase text-center">{params.id ? `Update Task` : `Create Task`}</h1>
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              className="px-4 py-1 rounded-sm w-full"
              value={values.title}
            />

            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              className="px-4 py-1 rounded-sm w-full"
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Taskform;
