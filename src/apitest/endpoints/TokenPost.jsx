import React from 'react'

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json)
      setToken(json.token);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} placeholder='Username' />
      <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
      <button>Send</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost;