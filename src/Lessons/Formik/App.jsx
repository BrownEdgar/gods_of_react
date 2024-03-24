
import * as yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { nanoid } from 'nanoid'
import React, { useState} from 'react';
import './App.scss'

const validationSchema = yup.object({
  username: yup.string().max(20, "petq e lini max 20").min(3, "3 simvolic voch pakas").required(),
  email: yup.string().email().required(),
  gender: yup.string().oneOf(['male', 'female'])
})

export default function App() {
  const [users, setUsers] = useState([])
  const handleSumbit = (values) =>{
    console.log(values)
    const user ={
      id: nanoid(4),
      ...values,
    }
    setUsers([...users, user])
  }
  return (
    <div className='App'>
      <h1>Formik example</h1>
      <Formik 
      initialValues={{username: '', email: '', gender: 'male'}}
      onSubmit={handleSumbit}
      validationSchema={validationSchema}
      validateOnChange={true}
      >
        <Form>
          <Field type='email' name='email'/>
          <ErrorMessage name='email' component='p' className="error"/>
          <Field type='text' name='username'/>
          <ErrorMessage name='username' component='p' className="error"/>
          <Field as='select' name="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </Field>
          <ErrorMessage name='gender'component='p' className="error"/>
          <input type="submit" />
        </Form>
      </Formik>
    </div>
  )
}
