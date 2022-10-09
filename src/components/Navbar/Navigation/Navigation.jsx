import React from 'react';
import s from './Navigation.module.css';
import cart  from "../../../images/cart.png"
import puff from "../../../images/puff.png"
import rain from "../../../images/rain.png"
import nap from "../../../images/nav.png"

function Navigation() {
  let navi = [
    { name: 'PUFI PUFF', img: puff },
    { name: 'PUFI RAIN', img: rain},
    { name: 'PUFI CART', img: cart },
    { name: 'PUFI NAP', img: nap },
  ];
  return (
    <div className={s.navigation}>
      {navi?.map((el, i) => {
        return (
          <div className={s.navigation__one}>
            <img className={s.img} src={el.img} alt={el.name} />
            <p>{el.name}</p>
            {
             i !== 3 &&  (<p className={s.break}></p>)
            }
          </div>
        );
      })}
    </div>
  );
}
export default Navigation;
