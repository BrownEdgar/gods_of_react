import {Navigate, Outlet} from 'react-router-dom'
import ROUTES from '../routes'

export default function PrivateLayouts({isLogin}) {
  return isLogin ? <Outlet /> : <Navigate to={ROUTES.LOGIN}/>
}
