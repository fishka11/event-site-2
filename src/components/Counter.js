import React, { Component } from "react";

import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { eventDate: props.eventDate, currentDate: Date.now() };
  }

  tick() {
    this.setState((state) => ({
      currentDate: Date.now(),
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="counter text-center">{this.state.currentDate}</div>;
  }
}

export default Counter;
