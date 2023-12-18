import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({id}) => {
  const {loading, request} = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm('Delete photo?');
    if (confirm) {
      const {url, options} = PHOTO_DELETE(id);
      const {response} = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? <button disabled className={styles.delete}>Delete</button> : 
      <button onClick={handleClick} className={styles.delete}>Delete</button>}
    </>
  );
}

export default PhotoDelete;