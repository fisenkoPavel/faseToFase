import React from 'react';

import style from './ProfileStyle.module.css';

import UserProfile from './UserProfile/UserProfile';
import MyPost from './My_post/MyPost';

const Profile = (props) => {
    
    return (
        <section className={style.profile_app}>
            <UserProfile/>
            <MyPost posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </section>
    )
}

export default Profile;