import React from "react";
import style from './FriendsNavStyle.module.css';
import Friend from './Friend/Friend';

const Friends = () => {

    return (
        <div>
            <h3>Мои друзья</h3>
            <div className={style.friends_list}>
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
        </div>
    )
}


export default Friends;