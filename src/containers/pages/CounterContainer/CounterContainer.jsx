import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import Counter from '../../../components/Counter/Counter';

class CounterContainer extends Component {
  state = {
    amount: 0,
    disable: false
  }

  componentDidMount() {
    this.getAmount();
  }

  getAmount = () => {
    let storageAmount = localStorage.getItem('amount');

    if (storageAmount) {
      this.setState({
        amount: parseInt(storageAmount)
      }, () => {this.setDisable(this.state.amount)});
    } else {
      this.setDisable(this.state.amount)
    }
  }

  setDisable = (val) => {
    if (val <= 0) {
      this.setState({
        disable: true
      })

    } else {
      this.setState({
        disable: false
      })
    }
  }

  setAmount = () => {
    localStorage.setItem('amount', this.state.amount);
    this.setDisable(this.state.amount)
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
      <div className="container">
        <Header handleReset={this.handleReset} title="Jemuran Counter."/>
        <Counter 
          amount={this.state.amount}
          handleKurang={() => this.handleKurang()}
          handleTambah={() => this.handleTambah()} 
          isDisabled={this.state.disable}/>
      </div>
    );
  }
}

export default CounterContainer;
