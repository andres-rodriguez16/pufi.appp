import React from 'react'
import s from './Carousel.module.css';
import carousel1 from '../../images/Carousel1.jpg'
import carousel2 from '../../images/carousel2.jpg'

function Carousel() {
  return (
    <div className={s.slider}>
      <ul>
        <li>
          <img src={carousel1} alt="image1" />
        </li>
        <li>
          <img src={carousel2} alt="image2" />
        </li>
      </ul>
    </div>
  )
}

export default Carousel