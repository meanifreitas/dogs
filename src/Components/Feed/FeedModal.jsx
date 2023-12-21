import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  React.useEffect(() => {
    const modal = modalRef.current;
    modal.addEventListener('keydown', handleOutsideClick);

    //removing the event listener when the component is dismounted
    return () => {
      modal.removeEventListener('keydown', handleOutsideClick);
    };
  }, []);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget || event.key === 'Escape') setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick} ref={modalRef} tabIndex='0'>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  );
}

export default FeedModal