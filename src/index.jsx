import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import { Home } from './Home';
import { Verca } from './Verca';
import { Majda } from './Majda';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/verca">Verča</Link>
          <Link to="/majda">Majda</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/majda">
          <Majda />
        </Route>
        <Route exact path="/verca">
          <Verca />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
