import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import DashboardPage from '../components/DashboardPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

const Routers = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/dashboard' component={DashboardPage} />
      <Route path='/about' component={AboutPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>  
);

export default Routers;