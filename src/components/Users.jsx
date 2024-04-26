import { getAsyncUsers, getUsers, saveUser } from "@f/users/usersSlice";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialValues = { username: "", email: "", password: "" };

export default function Users() {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUsers())
  }, [])

  const handleSubmit = (values, formik) => {
    const user = {
      id: nanoid(7),
      ...values,
    };
    dispatch(saveUser(user));
    formik.resetForm()
  };

  return (
    <div className="Users">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Password" />
          <input type="submit" value="Save" />
        </Form>
      </Formik>
      <ul>
        {users.map((elem) => {
          return <li key={elem.id}>{elem.username}</li>;
        })}
      </ul>
    </div>
  );
}
