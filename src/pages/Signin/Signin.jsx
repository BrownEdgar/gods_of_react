import React from 'react'
import './Signin.scss'
import { Field, Formik, Form } from 'formik'


const initialValues = {
  email: "",
  password: ""
}

export default function SignIn({ handleSubmit }) {
  return (
    <div className='SignIn'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <Field type="password" name="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </Form>
      </Formik>

    </div>
  )
}

