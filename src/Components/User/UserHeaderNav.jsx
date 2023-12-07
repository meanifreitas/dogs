import React from 'react';
import { NavLink, useLocation  } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MyPhotos from '../../Assets/feed.svg?react';
import Statistics from '../../Assets/statistics.svg?react';
import AddPhoto from '../../Assets/add.svg?react';
import Logout from '../../Assets/logout.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { logoutUser } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    logoutUser();
  }

  return (
    <>
      {mobile &&
        <button
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}>
        </button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  );
}

export default UserHeaderNav;