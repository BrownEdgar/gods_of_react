import React from "react";
import "./SignIn.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  email: "",
  password: "",
};

export default function SignIn({ handleSubmit }) {
  return (
    <div className="SignIn">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <Field type="password" name="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
