// Libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Static
import calculator from '../../img/calculator.svg';
import hourglass from '../../img/hourglass.svg';
import resume from '../../img/resume.svg';

class Navbar extends Component {
  handleNav = (destination) => {
    this.props.history.push(destination);
  }

  render() {
    return (
      <nav className="navbar">
        <button className="active" onClick={() => {this.handleNav('/')}}>
          <img src={calculator} alt="calculator"/>
          <p>Counter</p>
        </button>

        <button className="" onClick={() => {this.handleNav('/timer')}}>
          <img src={hourglass} alt="timer"/>
          <p>Timer</p>
        </button>
        
        <button className="" onClick={() => {this.handleNav('/about')}}>
          <img src={resume} alt="resume"/>
          <p>About</p>
        </button>
      </nav>
    );
  }
}

export default withRouter(Navbar);
