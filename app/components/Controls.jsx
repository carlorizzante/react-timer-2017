const React = require("react");

const Controls = React.createClass({
  propTypes: {
    timer_status: React.PropTypes.string.isRequired,
    updateStatus: React.PropTypes.func.isRequired
  },
  updateStatus: function(status) {
    return () => {
      this.props.updateStatus(status);
    }
  },
  render: function() {
    const { timer_status } = this.props;
    const renderBtn = () => {
      switch (timer_status) {
        case "run":
          return <button id="control-pause-btn" className="button expanded" onClick={this.updateStatus("pause")}>Pause</button>;
          break;
        case "pause":
        case "stop":
          return <button id="control-start-btn" className="button expanded" onClick={this.updateStatus("run")}>Start!</button>;
          break;
      }
    }
    return (
      <div id="controls" className="row">
        <div className="columns small-6 small-centered">
          {renderBtn()}
        </div>
        <div className="columns small-6 small-centered">
          <button id="control-clear-btn" className="button alert expanded" onClick={this.updateStatus("stop")}>Clear</button>
        </div>
      </div>
    );
  }
});

module.exports = Controls;
