import React from 'react';
import { TOKEN_POST, USER_GET, VALIDATE_TOKEN_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [logged, setLogged] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const logoutUser = React.useCallback(async function() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogged(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  async function getUser(token) {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogged(true);
  }

  async function loginUser(username, password) {
    try {
      setError(null);
      setLoading(true);

      const {url, options} = TOKEN_POST({username, password});
      const response = await fetch(url, options);

      if (!response.ok) throw new Error('Invalid user!');

      const { token } = await response.json();

      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (err) {
      setError(err.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const {url, options} = VALIDATE_TOKEN_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Invalid token!');

          await getUser(token);
        } catch (err) {
          logoutUser();
        } finally {
          setLoading(false);
        }
      } else {
        setLogged(false);
      }
    }
    autoLogin();
  }, [logoutUser]);

  return (
    <UserContext.Provider value={{loginUser, data, logoutUser, error, loading, logged}}>{children}</UserContext.Provider>
  );
}