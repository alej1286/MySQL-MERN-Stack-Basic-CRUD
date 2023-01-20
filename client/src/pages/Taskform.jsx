import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

const Taskform = () => {
  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values) => {
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
            />

            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Taskform;
