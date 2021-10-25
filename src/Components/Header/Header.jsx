import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header_style.module.css';

function Header () {
  return (
    <header className={style.app_header}>
      <div className={style.logo}>
        <img className={style.app_logo} src='https://banner2.cleanpng.com/20180424/fre/kisspng-helping-hand-ngo-child-business-earth-and-countdown-5-days-5aded5457030a1.1628014015245530294595.jpg' alt="logo" />
      </div>
      <div className={style.header_title}>
        <h1 className={style.title_h1}>Face to fase</h1>
      </div>
      <div className={style.header_btn}>
        <NavLink to="#">Выйти</NavLink>
      </div>
    </header>
  );
}

export default Header;
