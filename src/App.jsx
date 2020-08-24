import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Shoes from './Shoes/Shoes';
import Routes from './Routes/Routes';
import Team from './Team/Team';
import './App.css';

const App = () => (

  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/Shoes" component={Shoes} />
    <Route path="/Routes" component={Routes} />
    <Route path="/Team" component={Team} />
  </BrowserRouter>
);

export default App;