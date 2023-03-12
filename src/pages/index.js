import UseScrollToTop from 'hooks/useScrollToTop';
import { useRoutes } from 'react-router-dom';

import AuthRoute from 'components/AuthRoute';
import PrivateRoute from 'components/PrivateRoute';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Dashboard from './Dashboard';

const Pages = () => {
  const isAuthenticated = Boolean(localStorage.getItem('access_token'))

  let routes = useRoutes([
    {
      path: '/',
      element: <PrivateRoute isAuthenticated={() => Boolean(localStorage.getItem('access_token'))} component={Dashboard} />
    },
    {
      path: '/auth/login/*',
      element: <AuthRoute isAuthenticated={isAuthenticated} component={Login} />
    },
    {
      path: '/auth/signup/*',
      element: <AuthRoute isAuthenticated={isAuthenticated} component={Signup} />
    },
  ])

  return <UseScrollToTop>{routes}</UseScrollToTop>
}

export default Pages
