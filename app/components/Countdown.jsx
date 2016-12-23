const React = require("react");

const Clock = require("./Clock");
const CountdownForm = require("./CountdownForm");
const Controls = require("./Controls");

const Countdown = React.createClass({
  getInitialState: function() {
    return {
      time: 0,
      timer_status: "stopped"
    }
  },
  componentWillUnmount: function() {
    clearTimeout(this.timer);
  },
  handleSetCountdown: function(time) {
    this.setState({
      time: time,
      timer_status: "running"
    });
    // console.log("Countdown started!");
    this.count(time);
  },
  count: function(time) {
    if (time >= 0) {
      this.setState({
        time: time
      });
      // console.log("Counting...", time);
      this.timer = setTimeout(() => this.count(time - 1), 1000);
    } else {
      this.setState({
        timer_status: "stopped"
      });
      // console.log("Countdown stopped!");
    }
  },
  render: function () {
    const { time, timer_status } = this.state;
    return (
      <div id="countdown">
        <Clock time={time}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        <Controls timer_status={timer_status}/>
      </div>
    );
  }
});

module.exports = Countdown;
