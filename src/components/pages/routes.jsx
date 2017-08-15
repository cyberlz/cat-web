import React from 'react';
import { Route , IndexRoute, Switch ,Link } from 'react-router-dom';
import App from '../app/App';
import Nav from '../common/Nav';
import Home from './Home';
import Blog from './Blog';
import Show from './Show';
import Mark from './Mark';
import About from './About';
import NotFound from './NotFound';

const rootRoute = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/show" component={Show}/>
      <Route path="/mark" component={Mark}/>
      <Route path="/about" component={About}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default rootRoute;
