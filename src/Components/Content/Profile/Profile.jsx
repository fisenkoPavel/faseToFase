import React from 'react';

import style from './Profile_style.module.css';

import User_profile from './User_profile/User_profile';
import MyPost from './My_post/MyPost';

const Profile = (props) => {
    
    return (
        <section className={style.profile_app}>
            <User_profile/>
            <MyPost posts={props.posts}/>
        </section>
    )
}

export default Profile;