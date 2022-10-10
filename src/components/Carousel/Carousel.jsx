import React from 'react';
import s from './Carousel.module.css';
import carousel4 from '../../images/carousel4.jpg';
import carousel1 from '../../images/Carousel1.jpg';

function Carousel() {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <img src={carousel4} alt='' />
          <h1 className={s.titulo}>ESTAR CÓMODO NUNCA 
          <br/>FUE TAN FÁCIL</h1>
          <button>SHOP</button>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
