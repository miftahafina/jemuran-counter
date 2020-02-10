// Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import CounterContainer from '../CounterContainer/CounterContainer';
import TimerContainer from '../TimerContainer/TimerContainer';
import About from '../About/About';

// Style
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/timer">
            <TimerContainer />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <CounterContainer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Home;
