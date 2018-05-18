import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './index.css';
import App from './App';
import OtherPage from './OtherPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={App}/>

      <Route
        exact
        path="/my-other-page"
        component={OtherPage}/>

    </Switch>
  </BrowserRouter> 
  ), document.getElementById('root')
);

registerServiceWorker();
