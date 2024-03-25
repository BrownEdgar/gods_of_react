import React, { useState } from 'react';
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './App.scss'
import { nanoid } from 'nanoid';

const initialValues = {
  username: '',
  email: '',
  subject: '',
  message: ''
}

const validationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export default function App() {

  const [users, setUsers] = useState([])

  const handleSubmit = (values) => {
    console.log(values);
    const user = {
      id: nanoid(7),
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
          <Field type='text' name='username' placeholder='Your name' />
          <ErrorMessage name='username' component='p' className="error" />
          <Field type='email' name='email' placeholder='Email' />
          <ErrorMessage name='email' component='p' className="error" />
          <Field type='text' name='subject' placeholder='Subject' />
          <ErrorMessage name='subject' component='p' className="error" />
          <Field as='textarea' type='text' name='message' placeholder='Write your message' className='message' />
          <ErrorMessage name='message' component='p' className="error" />
          <input type="submit" value='Send Message' className='submit' />
        </Form>
      </Formik>
    </div>
  )
}
