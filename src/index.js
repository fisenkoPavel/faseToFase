import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

/*let posts = [
  {id:1, message: 'Мой первый пост', like: 14},
  {id:2, message: 'Мой второй пост', like: 1},
  {id:3, message: 'Мой третий пост', like: 4},
  {id:4, message: 'Мой четвертый пост', like: 105},
  {id:5, message: 'Мой пятый пост', like: 21}
];

let dialogs = [
  {id: 1, name: 'Павел'},
  {id: 2, name: 'Дмитрий'},
  {id: 3, name: 'Алексей'},
  {id: 4, name: 'Роман'}
];

let messages = [
  {id: 1, message: 'Привет'},
  {id: 2, message: 'Как дела??'},
  {id: 3, message: 'Чем занимаешься??'},
  {id: 4, message: '))))'}
];*/

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
