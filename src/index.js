import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { AppTe } from './appTe';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ContactPage } from './components/contactPage/contactPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Switch>
        <Route exact path='/' Component={AppTe} />
      </Switch>
    </BrowserRouter> */}
          <AppTe />
          {/* <ContactPage /> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
