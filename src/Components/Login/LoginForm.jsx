import React from 'react';
import styles from './LoginForm.module.css';
import btnStyles from '../Forms/Button.module.css';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { loginUser, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      loginUser(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='username' type='text' name='username' {...username} />
        <Input label='password' type='password' name='password' {...password} />
        {loading ? <Button disabled>Loading...</Button> : <Button>Login</Button>}  
        <Error error={error}/>
      </form>
      <Link className={styles.forgot} to='/login/forgot'>Forgot password</Link>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Sign up</h2>
        <p>Create your account</p>
        <Link className={btnStyles.button} to='/login/create'>Sign up</Link>
      </div>
    </section>
  );
}

export default LoginForm