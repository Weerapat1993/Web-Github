import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'admin-lte/dist/js/app.min';
import 'admin-lte/bootstrap/js/bootstrap.min';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll.min';


const root = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" name="about" component={About}></Route>
        <Route path="portfolio" name="portfolio" component={Portfolio}></Route>
      </Route>
    </Router>
  ,root);
