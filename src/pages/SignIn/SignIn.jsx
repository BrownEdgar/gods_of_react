import React from 'react'
import './SignIn.scss'
import { Field, Formik, Form} from 'formik'


const initialValues = {email: '', password: ''}


export default function SignIn({handleSubmit}) {

    
  return (
    <div className='SignIn'>
        <Formik
        onSubmit={handleSubmit} 
        initialValues={initialValues}>
            <Form>
                <label htmlFor="email"></label>
                <Field input='email' name='email' placeholder='Email' required/>
                <label htmlFor="password"></label>
                <Field input='password' name='password' placeholder='Password' required/>
                <div>
                    <input type="submit" value='Login'/>
                </div>
            </Form>
        </Formik>

    </div>
  )
}
