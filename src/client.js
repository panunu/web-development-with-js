import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import HelloWorldApp from './components/HelloWorldApp';
import GreeterPage from './components/GreeterPage';
import FrontPage from './components/FrontPage';

const routes = (
    <Router>
        <Route component={HelloWorldApp}>
            <Route path="/" component={FrontPage}></Route>
            <Route path="/hello/:name" component={GreeterPage}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
