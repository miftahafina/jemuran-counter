import React from 'react';
import { Link } from 'react-router-dom';
import calculator from '../../img/calculator.svg';
import hourglass from '../../img/hourglass.svg';
import resume from '../../img/resume.svg';

const Footer = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="active">
        <img src={calculator} alt="icon calculator"/>
        <p>Counter</p>
      </Link>
      <Link to="/timer">
        <img src={hourglass} alt="icon timer"/>
        <p>Timer</p>
      </Link>
      <Link to="/about">
        <img src={resume} alt="icon resume"/>
        <p>About</p>
      </Link>
    </nav>
  );
}

export default Footer;
