import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import { Home } from './Home';
import { Verca } from './Verca';
import { Majda } from './Majda';
import { Footer } from './Footer';
import { Header } from './Header';

const App = () => {
  return (
    <>
      <Header />

      <Router>
        <nav className="menu__nav">
          <Link className="menu__link" to="/">
            Home
          </Link>

          <Link className="menu__link" to="/verca">
            Verča
          </Link>

          <Link className="menu__link" to="/majda">
            Majda
          </Link>
        </nav>

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
    </>
  );
};

render(<App />, document.querySelector('#app'));
