import React from 'react';

import style from './UserProfileStyle.module.css';

const UserProfile = () => {
    return (
        <section className={style.app_content}>
            <div className={style.content_wallpaper}>
                <img className={style.wallpaper} src="https://get.wallhere.com/photo/cherry-blossom-Japan-light-pink-sakura-water-1839719.jpg" alt="wallpaper"/>
            </div>
            <div className={style.user_photo}>
                <img className={style.photo} src="https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png" alt="user_photo" />
            </div>
            <div className={style.name}>Павел Фисенко</div>
            <div className={style.user_profile}>

                <div className={style.user_info}>
                    <div>
                        <h3>Основная информация</h3>
                        <p className={style.user_birth}><span className={style.user_bold}>Дата рождения:</span> 14.08.1990</p>
                        <p className={style.user_city}><span className={style.user_bold}>Родной город:</span> Воронеж</p>
                        <p className={style.user_phone}><span className={style.user_bold}>Семейное положение:</span> Женат</p>
                        <p className={style.user_phone}><span className={style.user_bold}>Образование:</span> ВИВТ</p>
                    </div>
                    <div>
                        <h3>Контактная информация</h3>
                        <p className={style.user_phone}><span className={style.user_bold}>Город:</span> Воронеж</p>
                        <p className={style.user_phone}><span className={style.user_bold}>Телефон:</span> +7-919-181-53-94</p>
                        <p className={style.user_phone}><span className={style.user_bold}>Инстаграм:</span> @pavel_freez_fisenko</p>
                        <p className={style.user_phone}><span className={style.user_bold}>Телеграм:</span> @pavelfisenko</p>
                    </div>
                    <div>
                        <h3>Работа</h3>
                        <p className={style.user_site}><span className={style.user_bold}>Организация:</span> ЮВТМ-ВМУ2</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile;