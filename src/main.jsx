import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
// import Main from './Components/MainSection';
import './Styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App';
import { thunk } from 'redux-thunk';
// import { database } from './database/config';


const store = configureStore({
  reducer: rootReducer
  },
  applyMiddleware(thunk)

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<React.StrictMode>
   <BrowserRouter><App/></BrowserRouter>
  </React.StrictMode>
</Provider>
  );

