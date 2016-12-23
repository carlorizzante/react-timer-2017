const React = require("react");

const Controls = React.createClass({
  propTypes: {
    timer_status: React.PropTypes.string.isRequired
  },
  render: function() {
    const { timer_status } = this.props;
    // console.log("timer_status is", timer_status);
    const renderBtn = () => {
      switch (timer_status) {
        case "running":
          // console.log("rendering pause btn");
          return <button id="control-pause-btn" className="button expanded">Pause</button>;
          break;
        case "paused":
          // console.log("rendering start btn");
          return <button id="control-start-btn" className="button expanded">Start</button>;
          break;
      }
    }
    return (
      <div id="controls" className="row">
        <div className="columns small-8 small-centered">
          {renderBtn()}
        </div>
        <div className="columns small-8 small-centered">
          <button id="control-clear-btn" className="button alert hollow expanded">Clear</button>
        </div>
      </div>
    );
  }
});

module.exports = Controls;
