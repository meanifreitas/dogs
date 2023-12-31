import React from 'react'

const PhotoGet = () => {
  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/photo').then(response => {
      return response.json();
    }).then(json => {
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Send</button>
    </form>
  )
}

export default PhotoGet