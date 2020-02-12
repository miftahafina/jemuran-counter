// Libraries
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Static
import calculator from '../../img/calculator.svg';
import hourglass from '../../img/hourglass.svg';
import resume from '../../img/resume.svg';

class Navbar extends Component {
  state = {
    location: this.props.history.location,
    nav: {
      counter: '',
      timer: '',
      about: ''
    }
  }

  componentDidMount() {
    const currentPage = this.props.history.location.pathname;
    this.onNavChange(currentPage);
  }

  handleNav = (destination) => {
    this.props.history.push(destination);
    this.setState({
      location: this.props.history.location
    }, () => {
      this.onNavChange(destination);
    });
  }

  onNavChange = (currentPage) => {
    switch (currentPage) {
      case '/':
        this.setState({
          nav: {
            counter: 'active',
            timer: '',
            about: ''
          }
        });
        break;

      case '/timer':
        this.setState({
          nav: {
            counter: '',
            timer: 'active',
            about: ''
          }
        });
        break;

      case '/about':
        this.setState({
          nav: {
            counter: '',
            timer: '',
            about: 'active'
          }
        });
        break;

      default:
        this.setState({
          nav: {
            counter: 'active',
            timer: '',
            about: ''
          }
        });
        break;
    }
  }
  

  render() {
    let { counter, timer, about } = this.state.nav;
    let { handleNav } = this;

    return (
      <nav className="navbar">
        <button className={counter} onClick={() => {handleNav('/')}}>
          <img src={calculator} alt="calculator"/>
          <p>Counter</p>
        </button>

        <button className={timer} onClick={() => {handleNav('/timer')}}>
          <img src={hourglass} alt="timer"/>
          <p>Timer</p>
        </button>
        
        <button className={about} onClick={() => {handleNav('/about')}}>
          <img src={resume} alt="resume"/>
          <p>About</p>
        </button>
      </nav>
    );
  }
}

export default withRouter(Navbar);
