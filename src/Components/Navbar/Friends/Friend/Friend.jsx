import React from "react";
import style from './FriendStyle.module.css';

const Friend = (props) => {
    return(
        <div className={style.friend}>
            <div className={style.avatar}></div>
            <span className={style.friend_item}>{props.name}</span>
        </div>
    )
}

export default Friend;