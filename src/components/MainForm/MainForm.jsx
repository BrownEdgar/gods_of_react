import React from "react";
import "./MainForm.scss";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";


const initialValues = {title: '', desc: '', avatar: '', poster: ''}

export default function MainForm({addBlog}) {

const handleSubmit = (values, {resetForm}) => {
const blog =  {
  id: nanoid(5),
  title: values.title,
  desc: values.desc,
  avatar: `./images/${values.file}`,
  poster: `./images/${values.files}`,

}
addBlog(blog)
resetForm()
}


  return (
    <div className="MainForm">
      <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <Form>
              <Field type="text" name="title" />
              <Field as="textarea" name="desc" className='textarea'>Enter Blog description here...</Field>
              <label htmlFor="avatar">Author</label>
              <Field type='file' name='avatar' onChange={(e) => {
                formik.setFieldValue('file', e.target.files[0].name)
              }}/>
              <label htmlFor="poster">poster</label>
              <Field type='file' name='poster'  onChange={(e) => {
                formik.setFieldValue('files', e.target.files[0].name)
                }}/>
              <input type="submit" value='add post' />
              
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
