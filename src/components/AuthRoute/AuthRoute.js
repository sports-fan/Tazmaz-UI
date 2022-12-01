import { Navigate } from 'react-router-dom';

const AuthRoute = ({ component: Component, redirectTo = '/', isAuthenticated }) =>
  isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;

export default AuthRoute;
