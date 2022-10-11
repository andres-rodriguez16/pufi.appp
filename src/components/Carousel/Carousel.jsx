import React from 'react';
import s from './Carousel.module.css';
import carousel4 from '../../images/carousel4.jpg';

function Carousel() {
  return (
    <div className={s.container}>
      <ul className='card'>
        <li>
          <img src={carousel4} alt='' />
          <h1 className={s.titulo}>ESTAR CÓMODO 
          <br/>NUNCA FUE TAN FÁCIL</h1>
          <button>SHOP</button>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
