import React from 'react';

import style from './NewPost_style.module.css';

function NewPost () {
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