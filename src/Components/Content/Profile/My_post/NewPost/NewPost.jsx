import React from 'react';

import style from './NewPostStyle.module.css';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ' ';
    }

    return (
        <div className={style.new_post}>
            <div>
                <div>
                    <textarea rows='10' cols="30" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Новый пост</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;