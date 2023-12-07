import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotos from '../../Assets/feed.svg?react';
import Statistics from '../../Assets/statistics.svg?react';
import AddPhoto from '../../Assets/add.svg?react';
import Logout from '../../Assets/logout.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const navigate = useNavigate();

  function handleLogout() {
    logoutUser();
    navigate('./login');
  }

  const { logoutUser} = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to='/account' end>
        <MyPhotos />
        {mobile && 'My photos'}
      </NavLink>
      <NavLink to='/account/statistics'>
        <Statistics />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to='/account/post'>
        <AddPhoto />
        {mobile && 'Add photo'}
      </NavLink>
      <button onClick={handleLogout}>
        <Logout />
        {mobile && 'Logout'}
      </button>
    </nav>
  );
}

export default UserHeaderNav;