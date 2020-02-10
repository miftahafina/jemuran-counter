import React, { Component, Fragment } from 'react';
import './Home.css';
import Header from '../../../components/Header/Header';
import Counter from '../../Counter/Counter';
import Footer from '../../../components/Footer/Footer';

class Home extends Component {
  state = {
    amount: 0
  }

  componentDidMount() {
    this.getAmount();
  }

  getAmount = () => {
    let storageAmount = localStorage.getItem('amount');

    if (storageAmount) {
      this.setState({
        amount: parseInt(storageAmount)
      });
    }
  }

  setAmount = () => {
    localStorage.setItem('amount', this.state.amount);
  }

  handleKurang = () => {
    if (this.state.amount > 0) {
      this.setState({
        amount: this.state.amount - 1

      }, () => {
        this.setAmount();
      });
    }
  }

  handleTambah = () => {
    this.setState({
      amount: this.state.amount + 1
      
    }, () => {
      this.setAmount();
    });
  }

  handleReset = () => {
    this.setState({
      amount: 0
      
    }, () => {
      this.setAmount();
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <Header handleReset={this.handleReset}/>
          <Counter 
            amount={this.state.amount}
            handleKurang={() => this.handleKurang()}
            handleTambah={() => this.handleTambah()} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
