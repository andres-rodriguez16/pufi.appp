import React from 'react';
import s from './Carousel.module.css';
import carousel4 from '../../images/carousel4.jpg';
import carousel2 from '../../images/carousel2.jpg';
import Carousel1 from '../../images/Carousel1.jpg';
import carousel from '../../images/shoping.jpg';

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
        <li>
          <img src={carousel2} alt='' />
        </li>
        <li>
          <img src={Carousel1} alt='' />
        </li>
        <li>
          <img src={carousel} alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
