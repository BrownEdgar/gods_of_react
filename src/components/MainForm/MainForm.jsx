import React from 'react'
import './MainForm.scss'
import { Field, Form, Formik } from 'formik'

const initialValues = {
  title: '',
  desc: '',
  avatar: '',
  poster: '',
}

export default function MainForm() {
  const handleSubmit = (values) => {
    console.log(values);
  }
  return (
    <div className='MainForm'>

      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
        {
          (formik) => {
            return (
              <Form>
                <Field type='text' name='title' placeholder='title' />
                <Field as='textarea' name='desc'>Enter Blog Description Here...</Field>
                <label htmlFor="avatar">Author</label>
                <Field type='file' name='avatar' />
                <label htmlFor="poster">Poster</label>
                <Field type='file' name='poster' />
                <input type="submit" value='Add Post' />
              </Form>
            )
          }
        }
      </Formik>

    </div>
  )
}
