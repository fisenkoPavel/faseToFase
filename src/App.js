import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app_container">
      <Header/>
      <Navbar state={props.state}/>
      <Content state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
