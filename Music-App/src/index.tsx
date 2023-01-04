import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/typography.css';
import './css/animations.css';
import './css/music.css';
import reportWebVitals from './reportWebVitals';
import { MusicApp } from './MusicApp';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <MusicApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
