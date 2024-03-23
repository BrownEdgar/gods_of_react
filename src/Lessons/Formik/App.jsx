import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import './App.scss'

const initialValues = { username: "", email: "", gender: "", language: ''}
const validationSchema = yup.object({
  username: yup.string().min(3).max(16).required(),
  email: yup.string().required(),
  gender: yup.string().oneOf(["male", "female"]),
  language: yup.array().min(2).required()
});

export default function App() {
  const handleSubmit = (values) => {
    console.log(values)
  };

  return (
    <div className="App">
      <h1>Formik example</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="App__form">
          <Field input="tetx" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" className="error"/>
          <Field input="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" className="error"/>
          <Field as="select" name="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </Field>
          <ErrorMessage name="gender" component="p" className="error"/>
          <Field type="checkbox" name="language" value="js" />
          js
          <Field type="checkbox" name="language" value="react" />
          react
          <Field type="checkbox" name="language" value="next" />
          next
          <Field type="checkbox" name="language" value="node" />
          node
          <ErrorMessage name="language" component="p" className="error"/>
          <input type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
