import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginForgotPassword from './LoginForgotPassword';
import LoginResetPassword from './LoginResetPassword';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged === true) return <Navigate to='/account' />
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='forgot' element={<LoginForgotPassword />}/>
        <Route path='reset' element={<LoginResetPassword />}/>
      </Routes>
    </div>
  );
}

export default Login