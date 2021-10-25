import React from "react";

import style from './Post_style.module.css';

function Post (props) {
    return (
        <div className={style.post}>
            <img className={style.post_logo} src="https://i.ucrazy.ru/files/i/2012.11.11/1352571682_2012-11-11_171_00122.jpg" alt="wallpaper" alt="" />
            <p className={style.post_title}>{props.message}</p>
            <div>
                <span>Like{props.like}</span><br/>
                <span>Dislike</span>
            </div>
        </div>
    )
}

export default Post; 