import React from 'react';
import logo from '../../images/footer.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import escudo from '../../images/escudo-de-proteccion.png';

function Footer() {
  return (
    <footer className='footer__container'>
      <img className='logo' src={logo} alt='pufi-logo' />
      <div className='section'>
        <p>PUFI RAIN</p>
        <p>PUFI PUFF</p>
        <p>PUFI CART</p>
        <p>PUFI NAP</p>
      </div>
      <div className='contacto'>
        <p>CONTACTO</p>
        <p>AYUDA</p>
        <p>CÓMO COMPRAR</p>
        <p>TÉRMINOS & CONDICIONES</p>
      </div>
      <div className='security'>
        <p>COMPRA 100% SEGURA</p>
        <div className='logo'>
          <img src={escudo} alt='escudo' />
          <p>Compra con la garantía de pufi</p>
        </div>
      </div>
      <div className='redes'>
        <p>SIGUENOS EN</p>
        <img src={facebook} alt='logo-facebook' />
        <img src={twitter} alt='logo-twitter' />
        <img src={instagram} alt='logo-instagram' />
      </div>
    </footer>
  );
}

export default Footer;
