import React from 'react';
import cart from '../../../images/cart.png';
import puff from '../../../images/puff.png';
import rain from '../../../images/rain.png';
import nap from '../../../images/nav.png';

function Navigation() {
  let navi = [
    { name: 'PUFI PUFF', img: puff },
    { name: 'PUFI RAIN', img: rain },
    { name: 'PUFI CART', img: cart },
    { name: 'PUFI NAP', img: nap },
  ];
  return (
    <div className='navigation'>
      {navi?.map((el, i) => {
        return (
          <div className='navigation__one'>
            <img className='img' src={el.img} alt={el.name} />
            <p>{el.name}</p>
            {i !== 3 && <p className='break'></p>}
          </div>
        );
      })}
    </div>
  );
}
export default Navigation;
