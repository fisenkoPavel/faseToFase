import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import style from './ContentStyle.module.css';

import Profile from './Profile/Profile';
import Messages from './Messages/Mesages';
import News from './News/News';
import Music from './Music/Music';
import Video from './Video/Video';

const Content = (props) => {

    return (
        <main className={style.app_main}>
            <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>
            <Route path='/messages' component={Messages}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/video' component={Video}/>
        </main>
    )
}

export default Content;