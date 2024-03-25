import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { nanoid } from 'nanoid'
import './App.scss'
const initialValues = {
    username: '',
    email: '',
    subject: '',
    message: ''
  }
  const validationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string(),
    message: yup.string()
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
    <div className="App">
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
        >
            <Form>
                <Field type='text' name='username' placeholder="Your name"/>
                <ErrorMessage name='username' component='p' className='error'/>
                <Field type='email' name='email' placeholder="Email"/>
                <ErrorMessage name='email' component='p' className='error'/>
                <Field type='text' name='subject' placeholder="Subject"/>
                <ErrorMessage name='subject' component='p' className='error'/>
                <textarea name="message" id="" cols="52" rows="8" placeholder='Wtite your message'></textarea>
                <input type="submit" value="Send Message"/>
            </Form>
        </Formik>

    </div>
  )
}
