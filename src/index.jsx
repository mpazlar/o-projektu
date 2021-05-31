import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import { Home } from './Home';
import { Verca } from './Verca';
import { Majda } from './Majda';
import { Footer } from './Footer';

const App = () => {
  return (
    <Router>
      <div className="menu__div">
        <nav className="menu__nav">
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/verca">Verča</Link>
          </ul>
          <ul>
            <Link to="/majda">Majda</Link>
          </ul>
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
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
