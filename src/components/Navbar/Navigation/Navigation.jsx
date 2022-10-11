import React from 'react';
import cart from '../../../images/cart.png';
import puff from '../../../images/puff.png';
import rain from '../../../images/rain.png';
import nap from '../../../images/nav.png';

function Navigation() {
  
  return (
    <div className='navigation'>
      <div className='navigation__one'>
        <img className='img' src={puff} alt='PUFI PUFF' />
        <p>PUFI PUFF</p>
      </div>
      <div className='navigation__two'>
        <img className='img' src={rain} alt='PUFI RAIN' />
        <p>PUFI RAIN</p>
      </div>
      <div className='navigation__three'>
        <img className='img' src={cart} alt='PUFI CART' />
        <p>PUFI CART</p>
      </div>
      <div className='navigation__four'>
        <img className='img' src={nap} alt='PUFI NAP' />
        <p>PUFI NAP</p>
      </div>
    </div>
  );
}
export default Navigation;
