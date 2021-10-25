import React from 'react';

import style from './Messages_style.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {

    let path = '/messages/' + props.id;
    return (
        <div className={style.item}><NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink></div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

const Messages = (props) => {
    return (
        <section className={style.app_messages}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogItem name='Павел' id='1'/>
                    <DialogItem name='Дмитрий' id='2'/>
                    <DialogItem name='Алексей' id='3'/>
                    <DialogItem name='Роман' id='4'/>
                </div>
            </div>
            <div className={style.messages}>
                <Message message='Привет'/>
                <Message message='Как дела??'/>
                <Message message='Чем занимаешься??'/>
            </div>
        </section>
    )
}
export default Messages;