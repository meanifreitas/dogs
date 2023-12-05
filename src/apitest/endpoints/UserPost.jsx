import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json)
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} placeholder='Username' />
      <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder='Password' />
      <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' />
      <button>Send</button>
    </form>
  )
}

export default UserPost