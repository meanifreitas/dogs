import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { loginUser } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const { response } = await request(url, options);
    if (response.ok) loginUser(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <Head title='Create account' description='Create your account'/>
      <h1 className='title'>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <Input label='username' type='text' name='username' {...username}/>
        <Input label='email' type='email' name='email' {...email}/>
        <Input label='password' type='password' name='password' {...password}/>
        {loading ? <Button disabled>Creating account...</Button> : <Button>Sign up</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate