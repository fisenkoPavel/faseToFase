import React from 'react';

import style from './MyPost_style.module.css';

import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

function MyPost () {
    return (
        <section className="app_my_post">
            <h2>Моя стена</h2>
            <NewPost/>
            <Post message='Мой первый пост' like='20'/>
            <Post message='Мой второй пост' like='5'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}

export default MyPost;