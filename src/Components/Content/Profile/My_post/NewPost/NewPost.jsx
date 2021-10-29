import React from 'react';

import style from './NewPostStyle.module.css';

const NewPost = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={style.new_post}>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Новый пост</button>
                </div>
            </div>
            <form action="">
                <input type="text" />
                <input type="submit" />
                <input type="reset" />
            </form>
        </div>
    )
}

export default NewPost;