import React from "react";
import style from './FriendsNavStyle.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

    let friendsElements = props.friends.map(p => <Friend name={p.name}/>);

    return (
        <div>
            <h3>Мои друзья</h3>
            <div className={style.friends_list}>
                {friendsElements}
            </div>
        </div>
    )
}


export default Friends;