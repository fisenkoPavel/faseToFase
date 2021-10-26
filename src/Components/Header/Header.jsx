import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './HeaderStyle.module.css';

const Header = () => {
  return (
    <header className={style.app_header}>
      <div className={style.logo}>
        FASEtoFASE
      </div>
      <div className={style.header_nav}>
        <ul className={style.nav_items}>
          <li className={style.item}>Поиск</li>
          <li className={style.item}>Главная</li>
          <li className={style.item}>Оповещения</li>
          <li className={style.item}>Сообщения</li>
        </ul>
      </div>
      <div className={style.header_btn}>
        <NavLink to="#">Выйти</NavLink>
      </div>
      <div className={style.photo_mini}>
        <img className={style.photo} src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png" alt="user_photo_mini" />
      </div>
    </header>
  );
}

export default Header;
