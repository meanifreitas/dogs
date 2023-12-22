import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { LOST_PASSWORD } from '../../api';

const LoginForgotPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({login: login.value, url: window.location.href.replace('forgot', 'reset')});
      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className='title'>Forgot your password?</h1>
      {data ? <p>{data}</p> : 
        <form onSubmit={handleSubmit}>
          <Input label='email / username' type='text' name='email' {...login} />
          {loading ? <Button disabled>Sending...</Button> : <Button>Send email</Button>}
        </form>
      }
      <Error error={error} />
    </section>
  );
}

export default LoginForgotPassword;