import React from 'react';
import style from './MessagesStyle.module.css';
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

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map (m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <section className={style.app_messages}>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.new_message}>
                <div>
                    <textarea name="" id="" cols="30" rows="10" ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </section>
    )
}
export default Messages;