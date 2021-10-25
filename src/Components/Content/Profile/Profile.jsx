import React from 'react';

import style from './Profile_style.module.css';

import User_profile from './User_profile/User_profile';
import MyPost from './My_post/MyPost';

function Profile () {
    return (
        <section className={style.profile_app}>
            <User_profile/>
            <MyPost/>
        </section>
    )
}

export default Profile;