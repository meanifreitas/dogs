import React from 'react';
import { UserContext } from '../../UserContext'; 
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { logged } = React.useContext(UserContext);

  if (logged === true) return children;
  else if (logged === false) return <Navigate to='/login'/>;
  else return <></>;
}

export default ProtectedRoute;