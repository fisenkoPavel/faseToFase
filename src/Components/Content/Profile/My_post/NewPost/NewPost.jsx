import React from 'react';

import style from './NewPostStyle.module.css';

const NewPost = () => {
    return (
        <div className={style.new_post}>
            <form action="">
                <input type="text" />
                <input type="submit" />
                <input type="reset" />
            </form>
        </div>
    )
}

export default NewPost;