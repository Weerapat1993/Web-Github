import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';
import About from './pages/About';
import Todos from './pages/Todos';
import Portfolio from './pages/Portfolio';
import E_Student from './pages/portfolio/E_Student';
import E_Exam from './pages/portfolio/E_Exam';
import Ethnic from './pages/portfolio/Ethnic';
import Tos from './pages/portfolio/Tos';
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
        <Route path="todos(show/:id)" name="todos" component={Todos}></Route>
        <Route path="portfolio" name="portfolio" component={Portfolio}></Route>
        <Route path="portfolio/e-student" name="e-student" component={E_Student}></Route>
        <Route path="portfolio/e-exam" name="e-exam" component={E_Exam}></Route>
        <Route path="portfolio/ethnic" name="ethnic" component={Ethnic}></Route>
        <Route path="portfolio/tos" name="tos" component={Tos}></Route>
      </Route>
    </Router>
  ,root);
