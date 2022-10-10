import React from 'react'
import logo from '../../images/footer.png';
import facebook from '../../images/facebook.png';
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"


function Footer() {
  return (
    <footer className='footer__container'>
      <img className='logo' src={logo} alt="pufi-logo" />
      <div className='section'>
        <p>PUFI RAIN</p>
        <p>PUFI PUFF</p>
        <p>PUFI CART</p>
        <p>PUFI NAV</p>
      </div>
      <div className="contacto">
        <p>CONTACTO</p>
        <p>AYUDA</p>
        <p>COMO COMPRAR</p>
        <p>TÉMINOS & CONDICIONES</p>
      </div>
      <div className='security'>
        <p>COMPRAR 100%  SEGURA</p>
      </div>
      <div className="redes">
        <p>SIGUENOS EN 
        </p>
        <img src={facebook} alt="" /> 
        <img src={instagram} alt="" /> 
        <img src={twitter} alt="" />
      </div>
    </footer>
  )
}

export default Footer