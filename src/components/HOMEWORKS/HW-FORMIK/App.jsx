import React, { useState } from 'react';
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './App.scss'
import { nanoid } from 'nanoid';

const initialValues = {
  username: '',
  email: '',
  gender: '',
  color: '',
  language: []
}

const validationSchema = yup.object({
  username: yup.string().min(3, '3 sivolic voch pakas').max(20, '20 simvolic qich').required(),
  email: yup.string().email().required(),
  gender: yup.string().oneOf(['male', 'female']).required(),
  language: yup.array().min(2).required(),
})

export default function App() {

  const [users, setUsers] = useState([])

  const handleSubmit = (values) => {
    console.log(values);
    const user = {
      id: nanoid(4),
      ...values,
    }
    setUsers([...users, user])
  }
  return (
    <div className='App'>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
      >
        <Form>
          <Field type='text' name='username' />
          <ErrorMessage name='username' component='p' className="error" />
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='p' className="error" />
          <Field type='radio' name='gender' value='male' />male
          <Field type='radio' name='gender' value='female' />female
          <ErrorMessage name='gender' component='p' className="error" />
          <Field type='checkbox' name='language' value='js' />js
          <Field type='checkbox' name='language' value='react' />react
          <Field type='checkbox' name='language' value='next' />next
          <Field type='checkbox' name='language' value='node' />node
          <ErrorMessage name='language' component='p' className="error" />
          <input type="submit" />
        </Form>
      </Formik>
    </div>
  )
}
