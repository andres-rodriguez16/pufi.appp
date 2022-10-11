import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useForm } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm('mdojdgpe');
  if (state.succeeded) {
    return <p className='p__confirmation'>Thanks for joining!</p>;
  }
  return (
    <div>
      <div className='slogan'>
        <p className='p_first'>NEWSLETTER</p>
        <h1>SUSCRIBITE</h1>
        <p>Y enterate de todas las novedades</p>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Ingresa tu email'
            required
          ></input>
          <button disabled={state.submitting} type='submit' className='send'>
            <FiArrowRight className='flecha' />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
