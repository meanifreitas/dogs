import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname)
    switch(location.pathname) {
      case '/account':
        setTitle('Account');
        break;
      case '/account/statistics':
        setTitle('Statistics');
        break;
      case '/account/post':
        setTitle('Post');
        break;
      default:
        setTitle('My account')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;