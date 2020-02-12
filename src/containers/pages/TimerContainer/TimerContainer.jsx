import React, { Component } from 'react';
import Header from '../../../components/Header/Header';

class TimerContainer extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Cucian Timer"/>

        <div className="section display-counter">
          <div className="circle-sm">
            <p className="clock-timer">25:34</p>
            <small className="unit">Cuci + Rendam</small>
          </div>
        </div>

        <div className="section btn-timer">
          <div className="btn btn-md ml-8">
            <button className="current-timer">
              <p>Cuci + Rendam</p>
              <small>45<br />menit</small>
            </button>
          </div>

          <div className="btn btn-md ml-8">
            <button>
              <p>Bilas</p>
              <small>15<br />menit</small>
            </button>
          </div>

          <div className="btn btn-md ml-8">
            <button>
              <p>Pengeringan</p>
              <small>5<br />menit</small>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerContainer;
