import React, { Component, Fragment } from 'react';
import './Home.css';
import Navbar from '../../../components/Navbar/Navbar';
import Counter from '../../Counter/Counter';
import Footer from '../../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Counter />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
