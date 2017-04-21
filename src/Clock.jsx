import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    //console.log('this.props', this.props);
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);


  }

  componentDidMount() {
    //runs after component has completely rendered
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);

  }

  leading0(num) {
    //return num < 10 ? '0' + num: num;
    if (num < 10) {
      if (num < 0) {
        return '00';
      } else {
      console.log('less than 10');
      return '0' + num;
      }
    }
     else {
      console.log('no change');
      return num;
    }

  }

  deadlineReached(days, hours, minutes, seconds) {

    if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
      alert('deadline reached');
      }

  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours  = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    if (seconds < 0 && minutes < 0 && hours && days < 0) {
      alert('deadline reached!');
    }

    this.setState({days,hours, minutes, seconds});
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)}days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)}hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)}minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)}seconds</div>
        <p className="zeroMessage">{this.deadlineReached(this.state.days, this.state.hours, this.state.minutes, this.state.seconds)}</p>
      </div>
    )
  }
}

export default Clock;
