import React from 'react';

import style from './NavbarStyle.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/FriendsNav'
import state from '../../redux/state';

const Navbar = (props) => {
    return (
        <nav className={style.app_nav}>
            <ul className={style.app_nav_list}>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/profile">Мой Профиль</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/messages">Сообщения</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/news">Новости</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/music">Музыка</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/video">Видео</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/friends">Друзья</NavLink></li>
                <li className={style.app_nav__item}><NavLink className={style.app_nav__link} activeClassName={style.activeLink} to="/settings">Настройки</NavLink></li>
            </ul>
            <div className={style.friends_nav}>
                <Friends friends={props.state.friendsNavbar.friends}/>
            </div>
        </nav>
    );
};

export default Navbar;