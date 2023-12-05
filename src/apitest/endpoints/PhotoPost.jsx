import React from 'react'

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [img, setImg] = React.useState(null);

  const formData = new FormData();
  formData.append('img', img);
  formData.append('name', name);
  formData.append('weight', weight);
  formData.append('age', age);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json)
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={token} onChange={({ target }) => setToken(target.value)} placeholder='Token' />
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder='Name' />
      <input type="text" value={weight} onChange={({ target }) => setWeight(target.value)} placeholder='Weight' />
      <input type="text" value={age} onChange={({ target }) => setAge(target.value)} placeholder='Age' />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Send</button>
    </form>
  )
}

export default PhotoPost