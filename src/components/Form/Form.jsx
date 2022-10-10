import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function Form() {
  return (
    <div>
      <div className='slogan'>
        <p className='p_first'>NEWSLETTER</p>
        <h1>SUSCRIBITE</h1>
        <p>Y enterate de todas las novedades</p>
      </div>
      <div className='form'>
        <form action='https://formspree.io/f/mdojdgpe' method='POST'>
          <input
            type='email'
            name='email'
            placeholder='Ingresa tu email'
            required
          ></input>
          <button type='submit' className='send'>
            <FiArrowRight className='flecha' />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
