import React from 'react';

import style from './User_profile_style.module.css';

function User_profile () {
    return (
        <section className={style.app_content}>
            <div className={style.content_wallpaper}>
                <img className={style.wallpaper} src="https://i.ucrazy.ru/files/i/2012.11.11/1352571682_2012-11-11_171_00122.jpg" alt="wallpaper"/>
            </div>
            <div className={style.user_profile}>
                <div className={style.user_photo}>
                    <img className={style.photo} src="https://a-a-ah-ru.s3.amazonaws.com/uploads/items/37005/46143/large_509c41f76edc9580904809.jpg" alt="user_photo" />
                </div>
                <div className={style.user_info}>
                    <p className={style.user_birth}><span className={style.user_bold}>Дата рождения:</span> 14.08.1990</p>
                    <p className={style.user_city}><span className={style.user_bold}>Город:</span>Воронеж</p>
                    <p className={style.user_phone}><span className={style.user_bold}>Телефон:</span>+7-919-181-53-94</p>
                    <p className={style.user_site}><span className={style.user_bold}>Сайт:</span> www.google.com</p>
                </div>
            </div>
        </section>
    )
}

export default User_profile;