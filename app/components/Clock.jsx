const React = require("react");

const Clock = React.createClass({
  getDefaultProps: function() {
    return {
      time: 0
    }
  },
  propTypes: {
    time: React.PropTypes.number
  },
  formatTime: (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  },
  render: function() {
    const { time } = this.props;
    return (
      <div id="clock">
        <h4 className="clock-content">{this.formatTime(time)}</h4>
      </div>
    );
  }
});

module.exports = Clock;
