import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDate: props.eventDate,
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    let diffrence = Math.abs(
      Math.floor((this.state.eventDate.start - Date.now()) / 1000)
    );
    let days = Math.floor(diffrence / (24 * 60 * 60));
    let secsLeft = diffrence - days * 24 * 60 * 60;
    let hours = Math.floor(secsLeft / (60 * 60));
    secsLeft = secsLeft - hours * 60 * 60;
    let mins = Math.floor(secsLeft / 60);
    secsLeft = secsLeft - mins * 60;
    let secs = secsLeft;
    this.setState((state) => ({
      days,
      hours,
      mins,
      secs,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { eventDate, days, hours, mins, secs } = this.state;

    return (
      <div className='counter text-center'>
        {this.state.eventDate.start < Date.now() ? (
          <p className='countdown invitation'>
            Zapraszamy ponownie w {eventDate.start.getFullYear() + 1} roku{' '}
          </p>
        ) : (
          <p className='countdown'>
            <span className='d-block'>Już za</span>
            {days > 0 && (
              <span className='days-left'>
                <span className='digit'>{days}</span>
                {days === 1 ? 'dzień' : 'dni'}
              </span>
            )}{' '}
            {(days > 0 || hours > 0) && (
              <span className='hours-left'>
                <span className='digit'>
                  {hours.toString().padStart(2, '0')}
                </span>
                h
              </span>
            )}{' '}
            {(days > 0 || hours > 0 || mins > 0) && (
              <span className='mins-left'>
                <span className='digit'>
                  {mins.toString().padStart(2, '0')}
                </span>
                min
              </span>
            )}{' '}
            {
              <span className='secs-left'>
                <span className='digit'>
                  {secs.toString().padStart(2, '0')}
                </span>
                s
              </span>
            }
          </p>
        )}
      </div>
    );
  }
}

export default Counter;
