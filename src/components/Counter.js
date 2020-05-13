import React, { Component } from "react";

import "./Counter.css";

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
  }

  tick() {
    let diffrence = Math.abs(
      Math.floor((this.props.eventDate.start - Date.now()) / 1000)
    );
    console.log(diffrence);
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
    console.log(this.state.days);

    return (
      <div className="counter text-center">
        <p className="size6vw">Już za</p>
        <p>
          {` ${this.state.days} dni ${this.state.hours} h ${this.state.mins} min ${this.state.secs} s`}
        </p>
      </div>
    );
  }
}

export default Counter;
