import React from 'react';
import image1 from '../../images/Carousel1.jpg';
import image2 from '../../images/carousel2.jpg';
import image3 from '../../images/carousel4.jpg';
import image4 from '../../images/almohada.jpg';
import image5 from '../../images/umbrellas-816338.jpg';
import image6 from '../../images/shoping.jpg';
function Mosaic() {
  return (
    <div className='row'>
      <div className='instagram'>
        <p className='p_first'>INSTAGRAM</p>
        <h1>#ESPUFI</h1>
      </div>
      <div className='column'>
        <img src={image1} alt='' />
        <img src={image2} alt='' />
        <img src={image3} alt='' />
      </div>
      <div className='column1'>
        <img src={image4} alt='' />
        <img className='image5' src={image5} alt='' />
        <img src={image6} alt='' />
      </div>
    </div>
  );
}

export default Mosaic;
