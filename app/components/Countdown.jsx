const React = require("react");

const Clock = require("./Clock");
const CountdownForm = require("./CountdownForm");

const Countdown = React.createClass({
  getInitialState: function() {
    return {
      timer: 0
    }
  },
  handleSetCountdown: function(time) {
    console.log("handleSetCountdown", time);
    this.setState({
      timer: time
    });
    this.count(time);
  },
  count: function(time) {
    if (time >= 0) {
      console.log("Countdown", time);
      this.setState({
        timer: time
      });
      setTimeout(() => this.count(time - 1), 1000);
    }
  },
  render: function () {
    const { timer } = this.state;
    return (
      <div id="timer">
        <Clock time={timer}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
