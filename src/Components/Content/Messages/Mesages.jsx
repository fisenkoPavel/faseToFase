import React from 'react';

import style from './Messages_style.module.css';
import { NavLink } from 'react-router-dom';

function Messages () {
    return (
        <section className={style.app_messages}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <div className={style.item}><NavLink to='/messages/1' activeClassName={style.activeLink}>Павел</NavLink></div>
                    <div className={style.item}><NavLink to='/messages/2' activeClassName={style.activeLink}>Дмитрий</NavLink></div>
                    <div className={style.item}><NavLink to='/messages/3' activeClassName={style.activeLink}>Алексей</NavLink></div>
                    <div className={style.item}><NavLink to='/messages/4' activeClassName={style.activeLink}>Роман</NavLink></div>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Привет</div>
                <div className={style.message}>Как дела??</div>
                <div className={style.message}>Чем занимаешься??</div>
            </div>
        </section>
    )
}
export default Messages;