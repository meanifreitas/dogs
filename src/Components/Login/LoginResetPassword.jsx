import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { RESET_PASSWORD } from '../../api';
import { useNavigate } from 'react-router-dom';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const {url, options} = RESET_PASSWORD({
        login,
        key,
        password: password.value 
      });
      const { response } = await request(url, options);
  
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <Head title='Reset password' description='Reset password'/>
      <h1 className='title'>Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <Input label='New password' type='password' name='password' {...password}/>
        {loading ? <Button disabled>Reseting...</Button> : <Button>Reset</Button>}
        <Error error={error} />
      </form>
    </div>
  );
}

export default LoginResetPassword;