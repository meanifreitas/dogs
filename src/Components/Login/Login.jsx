import React from 'react';
import styles from './Login.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginForgotPassword from './LoginForgotPassword';
import LoginResetPassword from './LoginResetPassword';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const Login = () => {
  const { logged } = React.useContext(UserContext);

  if (logged === true) return <Navigate to='/account' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='create' element={<LoginCreate />}/>
          <Route path='forgot' element={<LoginForgotPassword />}/>
          <Route path='reset' element={<LoginResetPassword />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </section>
  );
}

export default Login