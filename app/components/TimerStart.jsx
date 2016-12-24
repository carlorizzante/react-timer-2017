const React = require("react");

const TimerStart = React.createClass({
  onSubmit: function(event) {
    event.preventDefault();
    this.props.onStartTimer();
  },
  render: function() {
    return (
      <div id="timer-form">
        <form ref="form" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="columns small-6 small-centered">
              <button id="form-btn-start" className="button expanded">Start</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = TimerStart;
