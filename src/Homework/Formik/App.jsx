import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import './App.scss'


const initialValues = {name:'', email:'', subject:'', textarea:''}
export default function App() {
    const [users, setUsers] = useState([])


    const handleSubmit = (values) => {
console.log(values)
    }
  return (
    <div className='App'>
        <Formik 
        onSubmit={handleSubmit}
        initialValues={initialValues}>
            <Form className='App__form'>
                <Field input='text' name='name' placeholder='Your name'/>
                <ErrorMessage name='name' components='p' className='error'/>
                <Field input='email' name='email' placeholder='Email'/>
                <ErrorMessage name='email' components='p' className='error'/>
                <Field input='text' name='subject' placeholder='Subject'/>
                <ErrorMessage name='subject' components='p' className='error'/>
                <Field input='textarea' name='textarea' placeholder='Write your message'/>
                <ErrorMessage name='textarea' components='p' className='error'/>
                <input type="submit" value='Send message' />
            </Form>
        </Formik>
    </div>
  )
}
