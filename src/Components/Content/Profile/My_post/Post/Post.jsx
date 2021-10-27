import React from "react";
import style from './PostStyle.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <img className={style.post_logo} src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png" alt="wallpaper" alt="" />
            <p className={style.post_title}>{props.message}</p>
            <div className={style.like}>
                <span>Like{props.like}</span><br/>
                <span>Dislike</span>
            </div>
        </div>
    )
}

export default Post;