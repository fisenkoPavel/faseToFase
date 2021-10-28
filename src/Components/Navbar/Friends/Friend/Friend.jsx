import React from "react";
import style from './FriendStyle.module.css';

const Friend = () => {
    return(
        <div className={style.friend}>
            <div className={style.avatar}></div>
            <span>Друг</span>
        </div>
    )
}

export default Friend;