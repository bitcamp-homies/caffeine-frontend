//@ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals.ts';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import rootReducer from './store';

const store = createStore(rootReducer, composeWithDevTools());
=======
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 5ff3439e61f577f5f41ad96b5dfd63d1a965fa60

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store = { store }>
      <App />
    </Provider>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 5ff3439e61f577f5f41ad96b5dfd63d1a965fa60
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();