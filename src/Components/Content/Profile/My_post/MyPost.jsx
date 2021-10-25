import React from 'react';

import style from './MyPost_style.module.css';

import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPost = () => {

    let posts = [
        {id:1, message: 'Мой первый пост', like: 14},
        {id:2, message: 'Мой второй пост', like: 1},
        {id:3, message: 'Мой третий пост', like: 4},
        {id:4, message: 'Мой четвертый пост', like: 105},
        {id:5, message: 'Мой пятый пост', like: 21}
    ]

    let postsElements = posts.map(p => <Post message={p.message} like={p.like}/>);

    return (
        <section className="app_my_post">
            <h2>Моя стена</h2>
            <NewPost/>
        {postsElements}
        </section>
    )
}

export default MyPost;