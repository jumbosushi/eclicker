import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router'
import './index.css';
import Page2 from './page2/page2'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/page2" component={Page2} />
  </Router>
  ), document.getElementById('root')
);
