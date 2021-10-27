import React from 'react';
import style from './MyPostStyle.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    return (
        <section className={style.app_my_post}>
            <h2>Моя стена</h2>
            <NewPost/>
        {postsElements}
        </section>
    )
}

export default MyPost;