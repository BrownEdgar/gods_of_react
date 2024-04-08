import React from "react";
import { Formik, Form, Field } from "formik";
import "./Login.scss";

const initialValues = { username: "", password: "" };

export default function Login({ handleSubmit }) {
  return (
    <div className="Login">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field input="text" name="username" placeholder="Username" />
          <Field input="password" name="password" placeholder="Password" />
          <input type="submit" value="LOGIN" className="log" />
          <p>Don`t have an account?</p>
        </Form>
      </Formik>
    </div>
  );
}
