import React, { Component, Fragment } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <div className="section display-counter">
          <div className="circle">
            <p className="number">{this.props.amount}</p>
            <small className="unit">jemuran</small>
          </div>
        </div>

        <div className="section btn-counter">
          <div className="btn btn-md ml-8">
            <button onClick={this.props.handleKurang}>Kurang</button>
          </div>
          <div className="btn btn-md ml-8">
            <button onClick={this.props.handleTambah}>Tambah</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
