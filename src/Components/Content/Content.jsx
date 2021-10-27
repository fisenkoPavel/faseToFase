import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import style from './ContentStyle.module.css';

import Profile from './Profile/Profile';
import Messages from './Messages/Mesages';
import News from './News/News';
import Music from './Music/Music';
import Video from './Video/Video';
import Friends from './Friends/Friends';
import Settings from './Settings/Settings';

const Content = (props) => {

    return (
        <main className={style.app_main}>
            <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>
            <Route path='/messages' render={ () => <Messages dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/video' render={ () => <Video/>}/>
            <Route path='/friends' render={ () => <Friends/>}/>
            <Route path='/settings' render={ () => <Settings/>}/>
        </main>
    )
}

export default Content;