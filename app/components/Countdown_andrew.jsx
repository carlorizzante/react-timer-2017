const React = require("react");

const Clock = require("./Clock");
const CountdownForm = require("./CountdownForm");

const Countdown = React.createClass({
  getInitialState: function() {
    return {
      timer: 0,
      timer_status: "stopped"
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timer_status != prevState.timer_status) {
      switch(this.state.timer_status) {
        case "running":
          this.startTimer();
          console.log("Countdown started!");
          break;
        case "stopped":
          console.log("Countdown stopped!");
          break;
      }
    }
  },
  handleSetCountdown: function(time) {
    this.setState({
      timer: time,
      timer_status: "running"
    });
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      const timer = this.state.timer - 1;
      this.setState({
        timer: timer
      });
      console.log("Counting...", timer);
    }, 1000);
  },
  render: function () {
    const { timer } = this.state;
    return (
      <div id="countdown">
        <Clock time={timer}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
