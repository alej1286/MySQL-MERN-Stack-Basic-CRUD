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
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
      <div className="dark:bg-gray-900 bg-slate-300 w-full shadow rounded p-8 sm:p-12">
        <p class="text-3xl font-bold leading-7 text-center dark:text-white text-gray-700">
          {params.id ? `Update Task` : `Create Task`}
        </p>
        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateTask(params.id, values);
              setTask(values);
            } else {
              await createTask(values);
              navigate(`/`);
              //actions.resetForm();
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div class="md:flex items-center mt-8">
                <div class="w-full flex flex-col">
                  <label className="font-semibold leading-none dark:text-gray-300">
                    Title
                  </label>
                  <input
                    className="leading-none dark:text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 dark:bg-gray-800 rounded bg-gray-200 "
                    type="text"
                    name="title"
                    placeholder="Write a title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
              </div>
              <div>
                <div class="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none dark:text-gray-300">
                    Description
                  </label>
                  <textarea
                    className="h-40 text-base leading-none dark:text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 dark:bg-gray-800 border-0 rounded bg-gray-200"
                    name="description"
                    rows="3"
                    placeholder="Write a description"
                    onChange={handleChange}
                    value={values.description}
                  ></textarea>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <button
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Taskform;
