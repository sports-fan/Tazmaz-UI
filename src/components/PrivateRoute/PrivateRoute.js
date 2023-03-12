import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo="/auth/login", component: Component, isAuthenticated }) => {
  const isAuth = typeof isAuthenticated === 'function' ? isAuthenticated() : isAuthenticated
  return isAuth ? (
    <div>
      <Component />
    </div>
  ) : (
    <Navigate to={redirectTo}/>
  );
};

export default PrivateRoute;
