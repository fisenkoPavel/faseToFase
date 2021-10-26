import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message: 'Мой первый пост', like: 14},
  {id:2, message: 'Мой второй пост', like: 1},
  {id:3, message: 'Мой третий пост', like: 4},
  {id:4, message: 'Мой четвертый пост', like: 105},
  {id:5, message: 'Мой пятый пост', like: 21}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
