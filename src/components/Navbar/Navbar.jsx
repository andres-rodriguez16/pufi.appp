import React from 'react';
import image from '../../images/logo.png';
import Navigation from './Navigation/Navigation';
import MyProfile from './myProfile/MyProfile';
function Navbar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logo__image" src={image} alt='logoPufi' />
      </div>
      <div className="Navigation">
        <Navigation />
      </div>
      <dir>
        <MyProfile />
      </dir>
    </div>
  );
}

export default Navbar;
