import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.scss";
import { nanoid } from "nanoid";

const initialValues = { username: "", email: "", subject: "" };
const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, "3 simvolic voch pakas")
    .max(20, "petq e lini maximum 20")
    .required(),
  email: yup.string().email().required(),
  subject: yup.string().min(5, "5 simvolic voch pakas").required(),
});

export default function App() {
  const [users, setUsers] = useState([]);


  const handleSubmit = (values) => {
    const user = {
      id: nanoid(4),
      ...values,
    };
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="App__form">
          <Field
            type="text"
            name="username"
            placeholder="Your name"
            className="App__form-inp"
         
          />
          <ErrorMessage name="username" component="p" />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="App__form-inp"
          />
          <ErrorMessage name="email" component="p" />

          <Field
            type="text"
            name="subject"
            placeholder="subject"
            className="App__form-inp"
          />
          <ErrorMessage name="subject" component="p" />

          <textarea
            cols="30"
            rows="10"
            placeholder="Write your message"
          ></textarea>
          <button type="submit" >Send Message</button>
        </Form>
      </Formik>

      <ul>
        {users.map((elem) => {
          return (
            <div className="check" key={elem.id}>
              <li>
                <i className="bi bi-person-circle"></i>
                {elem.username}
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                {elem.email}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
