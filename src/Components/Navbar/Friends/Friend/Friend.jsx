import React from "react";
import style from './FriendStyle.module.css';

const Friend = (props) => {
    return(
        <div className={style.friend}>
            <div className={style.avatar}></div>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;