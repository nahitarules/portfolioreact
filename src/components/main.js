import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import About from './aboutme';
import Resume from './resume';
import Contacts from './contacts';
import Products from './products';

const Main = () => ( 
    <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/aboutme" component={ About } />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/resume" component={ Resume } />
        <Route path="/products" component={ Products } />
    </Switch>
)

export default Main;
