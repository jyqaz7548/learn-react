import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // 필요한 경우 import
import Clock from './chapter04/Clock'; // Clock 컴포넌트 import
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Clock 컴포넌트 한 번만 렌더링
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);


reportWebVitals(); // 웹 vitals 측정

// 사용하지 않는 import문 제거 (App, Library)