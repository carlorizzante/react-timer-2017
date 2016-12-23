const React = require("react");

const Clock = require("./Clock");
const CountdownForm = require("./CountdownForm");
const Controls = require("./Controls");

const Countdown = React.createClass({
  getInitialState: function() {
    return {
      time: 0,
      timer_status: "stop"
    }
  },
  componentWillUnmount: function() {
    clearTimeout(this.timer);
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timer_status == prevState.timer_status) return;
    const { time, timer_status } = this.state;
    switch (timer_status) {
      case "run":
        this.count(time);
        break;
      case "pause":
        clearTimeout(this.timer);
        break;
      case "stop":
        clearTimeout(this.timer);
        this.setState({
          time: 0
        });
        break;
    }
  },
  handleSetCountdown: function(time) {
    this.setState({
      time: time,
      timer_status: "run"
    });
  },
  handleStatusChange: function(status) {
    this.setState({
      timer_status: status
    });
  },
  count: function(time) {
    const { timer_status } = this.state;
    if (time >= 0) {
      this.setState({
        time: time
      });
      this.timer = setTimeout(() => this.count(time - 1), 1000);
    } else {
      this.setState({
        timer_status: "stop"
      });
    }
  },
  render: function () {
    const { time, timer_status } = this.state;
    const renderControls = () => {
      const { timer_status } = this.state;
      switch (timer_status) {
        case "stop":
          return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
          break;
        case "run":
        case "pause":
          return <Controls timer_status={timer_status} updateStatus={this.handleStatusChange}/>;
          break;
        default:
      }
    }
    return (
      <div id="countdown">
        <h3 className="page-title text-center">Countdown App</h3>
        <Clock time={time}/>
        {renderControls()}
      </div>
    );
  }
});

module.exports = Countdown;
