import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../routes'

export default function PrivateLayouts({ isLogin }) {
  console.log('isLogin:', isLogin)
  return isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}
