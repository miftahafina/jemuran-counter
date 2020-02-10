import React, { Component, Fragment } from 'react';
import './Home.css';
import Header from '../../../components/Header/Header';
import Counter from '../../Counter/Counter';
import Footer from '../../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header />
          <Counter />
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Home;
