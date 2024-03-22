
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './App.scss'
import { nanoid } from 'nanoid'


const initialValues = {
  username: '',
  email: '',
  gender: '',
  language: []
}
const validationSchema = yup.object({
  username: yup.string().min(3, '3 simvolic voch pakas').max(20, "petq e lini maximum 20").required(),
  email: yup.string().email().required(),
  gender: yup.string().oneOf(['male', 'female']),
  language: yup.array().oneOf(['js', 'react', 'next', 'node']).min(2)
})

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (values) => {
    console.log(values)
    const user = {
      id: nanoid(4),
      ...values,
    }
    setUsers([...users, user])
  }
  return (
    <div className='App' >
      <h1>Formik example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
      >
        <Form>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='p' className='error' />
          <Field type='text' name='username' />

          <ErrorMessage name='username' component='p' className='error' />
          {/* <ErrorMessage name='username'>
            {
              (errorMessage) => {
                return (
                  <div>
                    <p className="error">
                      <span>{errorMessage}</span>
                    </p>
                  </div>
                )
              }
            }
          </ErrorMessage> */}




          <Field type='radio' name='gender' value='male' />male
          <Field type='radio' name='gender' value='female' />female
          <ErrorMessage name='gender' component='p' className='error' />
          <Field type='checkbox' name='language' value='js' /> js
          <Field type='checkbox' name='language' value='react' /> react
          <Field type='checkbox' name='language' value='next' /> next
          <Field type='checkbox' name='language' value='node' /> node

          <ErrorMessage name='language' component='p' className='error' />
          <input type="submit" />
        </Form>
      </Formik>
    </div >
  )
}
