const React = require("react");

const Clock = require("./Clock");
// const TimerStart = require("./TimerStart");
const Controls = require("./Controls");

const Timer = React.createClass({
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
  handleStartTimer: function() {
    this.setState({
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
    this.setState({
      time: time
    });
    this.timer = setTimeout(() => this.count(time + 1), 1000);
  },
  render: function() {
    const { time, timer_status } = this.state;
    // const renderControls = () => {
    //   const { timer_status } = this.state;
    //   switch (timer_status) {
    //     case "stop":
    //       return <TimerStart onStartTimer={this.handleStartTimer}/>;
    //       break;
    //     case "run":
    //     case "pause":
    //       return <Controls timer_status={timer_status} updateStatus={this.handleStatusChange}/>;
    //       break;
    //     default:
    //   }
    // }
    return (
      <div id="timer">
        <h3 className="page-title text-center">Timer App</h3>
        <Clock time={time}/>
        <Controls timer_status={timer_status} updateStatus={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
