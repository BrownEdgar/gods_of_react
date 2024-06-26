import React from 'react'
import './MainForm.scss'
import { Field, Formik, Form } from 'formik'
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet("0123456789abc-", 6)
const initialValues = {
  title: '',
  desc: '',
  avatar: '',
  poster: '',
}
export default function MainForm({ addBlog }) {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    const blog = {
      id: nanoid(),
      title: values.title,
      desc: values.desc,
      avatar: `./images/${values.file}`,
      poster: `./images/${values.files}`
    }
    addBlog(blog);
    resetForm()
  }

  return (
    <div className='MainForm'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {
          (formik) => {
            return (
              <Form>
                <Field type='text' name="title" placeholder="title" />
                <Field as='textarea' name="desc">
                  Enter Blog description here...
                </Field>
                <label htmlFor="avatar">Author</label>
                <Field type='file' name="avatar" onInput={(e) => {
                  console.dir(e.currentTarget.files[0])
                  formik.setFieldTouched('avatar', true)
                  formik.setFieldValue('file', e.target.files[0].name)
                }} />
                <label htmlFor="poster">poster</label>
                <Field type='file' name="poster" onInput={(e) => {
                  console.dir(e.currentTarget.files[0])
                  formik.setFieldTouched('poster', true)
                  formik.setFieldValue('files', e.target.files[0].name)
                }} />
                <input type="submit" value='add post' />
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
