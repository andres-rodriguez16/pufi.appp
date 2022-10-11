import React from 'react';
import rain from '../../images/paraguas.png';
import Cart from '../../images/card-cart.png';
import Puff from '../../images/almohada.png';
import umbrellas from '../../images/umbrellas-816338.jpg';
import shoping from '../../images/shoping.jpg';
import navCard from '../../images/almohada.jpg';
import puff1 from "../../images/puff.card1.png"
import playa2 from '../../images/playa.jpg';
import { FiChevronRight } from "react-icons/fi";
function Card() {
  return (
    <div>
      <div className='card__container'>
        <div className='image'>
          <img src={umbrellas} alt='' />
          <button>SHOP</button>
        </div>
        <div className='description'>
          <img className='paraguas' src={rain} alt='' />
          <h3 className='descripciion__h3'>Pufi RAIN</h3>
          <hr />
          <p>
            Descripción del producto. Este <br />
            es un texto simulado
          </p>
          <button className='card__button'><FiChevronRight style={{fontSize: 13}}/> VER MÁS</button>
        </div>
      </div>
      <div className='card__container'>
        <div className='description'>
          <img className='puff' src={Puff} alt='' />
          <h3 className='descripciion__h3'>Pufi NAP</h3>
          <hr />
          <p>
            Descripción del producto. Este <br />
            es un texto simulado
          </p>
          <button className='card__button'><FiChevronRight style={{marginTop : 2}}/> VER MÁS</button>
        </div>
        <div className='image'>
          <img src={navCard} alt='' />
          <button>SHOP</button>
        </div>
      </div>
      <div className='card__container'>
        <div className='image'>
          <img src={shoping} alt='' />
          <button>SHOP</button>
        </div>
        <div className='description'>
          <img className='cart' src={Cart} alt='' />
          <h3 className='descripciion__h3'>Pufi CART</h3>
          <hr />
          <p>
            Descripción del producto. Este <br />
            es un texto simulado
          </p>
          <button className='card__button'><FiChevronRight /> VER MÁS</button>
        </div>
      </div>
      <div className='card__container'>
        <div className='description'>
          <img className='puff' src={puff1} alt='' />
          <h3 className='descripciion__h3'>Pufi NAP</h3>
          <hr />
          <p>
            Descripción del producto. Este <br />
            es un texto simulado
          </p>
          <button className='card__button'><FiChevronRight style={{marginTop : 2}}/> VER MÁS</button>
        </div>
        <div className='image'>
          <img className='pufi2' src={playa2} alt='' />
          <button>SHOP</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
