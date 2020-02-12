import React, { Component } from 'react';
import Header from '../../../components/Header/Header';

class TimerContainer extends Component {
  state = {
    timeLeft: '00:00',
    currentTimerName: ''
  }

  handleSetTimer = (timerName, duration) => {
    this.setState({
      currentTimerName: timerName,
      timeLeft: duration

    }, () => {
      console.log(this.state.currentTimerName);

      setTimeout(() => {
        this.setState({
          timeLeft: this.state.timeLeft - 1
        })
      }, 1000);

    });
  }

  render() {
    return (
      <div className="container">
        <Header title="Cucian Timer"/>

        <div className="section display-counter">
          <div className="circle-sm">
            <p className="clock-timer">{this.state.timeLeft}</p>
            <small className="unit">{this.state.currentTimerName}</small>
          </div>
        </div>

        <div className="section btn-timer">
          <div className="btn btn-md ml-8">
            <button onClick={() => this.handleSetTimer('Cuci + Rendam', 45)} className={this.state.currentTimerName === 'Cuci + Rendam' ? 'current-timer' : ''}>
              <p>Cuci + Rendam</p>
              <small>45<br />menit</small>
            </button>
          </div>

          <div className="btn btn-md ml-8">
            <button onClick={() => this.handleSetTimer('Bilas', 15)} className={this.state.currentTimerName === 'Bilas' ? 'current-timer' : ''}>
              <p>Bilas</p>
              <small>15<br />menit</small>
            </button>
          </div>

          <div className="btn btn-md ml-8">
            <button onClick={() => this.handleSetTimer('Pengeringan', 5)} className={this.state.currentTimerName === 'Pengeringan' ? 'current-timer' : ''}>
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
