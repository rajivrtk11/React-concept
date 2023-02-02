import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hoc from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MyComp from './MyComp';
import Example from './FormikUseField';
import CheckBox from './checkbox';

const root = ReactDOM.unstable_createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hoc name={'rajiv'} /> */}
    <App/>
    {/* <MyComp/> */}
    {/* <Example/> */}
    {/* <CheckBox/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*
1. hoc(higher order coponent)
2. profiler
3. portal
4. redux and context => application and differences
5. 
*/