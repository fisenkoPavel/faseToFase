import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import style from './Content_style.module.css';

import Profile from './Profile/Profile';
import Messages from './Messages/Mesages';
import News from './News/News';
import Music from './Music/Music';
import Video from './Video/Video';

function Content () {
    return (
        <main className={style.app_main}>
            <Route path='/profile' component={Profile}/>
            <Route path='/messages' component={Messages}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/video' component={Video}/>
        </main>
    )
}

export default Content;