import React from 'react';

import style from './Navbar_style.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={style.app_nav}>
            <ul className={style.app_nav__list}>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/profile">Мой Профиль</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/messages">Сообщения</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/news">Новости</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/music">Музыка</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/video">Видео</NavLink></li>
                <li className={style.app_nav__item}><a className={style.app_nav__link} href="#">Группы</a></li>
                <li className={style.app_nav__item}><a className={style.app_nav__link} href="#">Настройки</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;