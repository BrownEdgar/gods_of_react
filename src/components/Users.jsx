import { getAyncUsers, getUsers, saveUser } from '@f/users/usersSlice';
import { Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const initialValues = {
  username: "",
  email: "",
  password: "",
}

export default function Users() {
  const users = useSelector(getUsers);
  const dispatch = useDispatch()
  const handleSubmit = (values, formik) => {
    const user = {
      id: nanoid(5),
      ...values
    }
    dispatch(saveUser(user))
    formik.resetForm()
  }

  useEffect(() => {
    dispatch(getAyncUsers())
  }, [])

  return (
    <div className='Users'>
      <Formik
        validateOnChange={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="username" placeholder="username" />
          <Field type="email" name="email" placeholder="email" />
          <Field type="password" name="password" placeholder="password" />
          <input type="submit" value='save user' />
        </Form>
      </Formik>
      <ul id="list">
        {users.map(elem => {
          return <li key={elem.id}>
            {elem.username}
          </li>
        })}
      </ul>
    </div>
  )
}
