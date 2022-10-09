import React from 'react';
import s from './Navbar.module.css';
import image from '../../images/logo.png';
import Navigation from './Navigation/Navigation';
import MyProfile from './myProfile/MyProfile';
function Navbar() {
  return (
    <div className={s.navBar}>
      <div className={s.logo}>
        <img className={s.logo__image} src={image} alt='logoPufi' />
      </div>
      <div className={s.Navigation}>
        <Navigation />
      </div>
      <dir>
        <MyProfile />
      </dir>
    </div>
  );
}

export default Navbar;
