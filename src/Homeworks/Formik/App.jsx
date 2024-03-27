import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { nanoid } from "nanoid";
import "./App.scss";

const initialValues = { name: "", email: "", subject: "", message: "" };
const validationSchema = yup.object({
  name: yup.string().min(2).max(20).required(),
  email: yup.string().required(),
  subject: yup.string().min(10).required(),
  message: yup.string().required(),
});

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values) => {
    const user = {
      id: nanoid(7),
      ...values,
    };
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="App__form">
          <Field
            input="text"
            name="name"
            placeholder="Your name"
            className="formik__input"
          />
          <ErrorMessage name="name" components="p" className="error" />
          <Field
            input="email"
            name="email"
            placeholder="Email"
            className="formik__input"
          />
          <ErrorMessage name="email" components="p" className="error" />
          <Field
            input="text"
            name="subject"
            placeholder="Subject"
            className="formik__input"
          />
          <ErrorMessage name="subject" components="p" className="error" />
          <Field
            as="textarea"
            name="message"
            placeholder="Write your message"
            className="formik__textarea"
          />
          <ErrorMessage name="message" components="p" className="error" />
          <input type="submit" value="Send message" />
        </Form>
      </Formik>
      <ul>
        {users.map((elem) => {
          return (
            <li key={elem.id}>
              <p>
                {elem.name}
                {elem.email}
                {elem.subject}
                {elem.message}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
