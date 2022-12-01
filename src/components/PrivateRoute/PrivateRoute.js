import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo="/auth/login", component: Component, isAuthenticated }) => {
  return isAuthenticated ? (
    <div>
      <Component />
    </div>
  ) : (
    <Navigate to={redirectTo}/>
  );
};

export default PrivateRoute;
