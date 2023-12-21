import React from 'react';
import Send from '../../Assets/send.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({id, setComments, single}) => {
  const [comment, setComment] = React.useState('');
  const {request, error} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea 
        id='comment'
        name='comment'
        value={comment}
        onChange={({target}) => setComment(target.value)}
        placeholder='leave your comment'
        className={styles.textarea}
      />
      <button className={styles.button}><Send /></button>
      {error && <Error error={error} />}
    </form>
  );
}

export default PhotoCommentsForm;