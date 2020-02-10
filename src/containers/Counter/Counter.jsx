import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <div className="section display-counter">
          <div className="circle">
            <p className="number">{this.state.amount}</p>
            <small className="unit">jemuran</small>
          </div>
        </div>

        <div className="section btn-counter">
          <div className="btn btn-md ml-8">
            <button onClick={this.handleKurang}>Kurang</button>
          </div>
          <div className="btn btn-md ml-8">
            <button onClick={this.handleTambah}>Tambah</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
