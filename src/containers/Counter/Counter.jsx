import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
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
        <div className="section">
          <div className="container">
            <div className="columns is-vcentered is-mobile">
              <div className="column has-text-centered">
                <h1 className="title is-size-super has-text-weight-light">
                  {this.state.amount}
                </h1>
                <h2 className="subtitle">jemuran</h2>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="column">
                <button className="button is-fullwidth" onClick={this.handleReset}>
                  Reset
                </button>
              </div>
              <div className="column">
                <button className="button is-fullwidth" onClick={this.handleKurang}>
                  -
                </button>
              </div>
              <div className="column">
                <button className="button is-fullwidth is-primary" onClick={this.handleTambah}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Counter;
