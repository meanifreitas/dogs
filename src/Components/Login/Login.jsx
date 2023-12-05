import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginForgotPassword from './LoginForgotPassword';
import LoginResetPassword from './LoginResetPassword';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='forgot' element={<LoginForgotPassword />}/>
        <Route path='reset' element={<LoginResetPassword />}/>
      </Routes>
    </div>
  )
}

export default Login