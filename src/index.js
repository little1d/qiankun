import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { registerMicroApps, start } from 'qiankun';

// 注册应用
registerMicroApps([
  {
    name: 'qiankun-micro-app1', 
    entry: '//localhost:3032',
    container: '#micro-app1',
    activeRule: '/micro-app1',
  },
  {
    name: 'qiankun-micro-app2',
    entry: '//localhost:3033',
    container: '#micro-app2',
    activeRule: '/micro-app2',
    // 传值
    props:{
      nickname:"杨卓",
      age:18
    }
  },
]);

start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
