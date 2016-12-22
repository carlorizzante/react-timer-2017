const React = require("react");

const CountdownForm = React.createClass({
  propTypes: {
    onSetCountdown: React.PropTypes.func.isRequired
  },
  onSubmit: function(event) {
    event.preventDefault();
    let time = this.refs.time.value;
    if (time.match(/^[0-9]+$/)) {
      this.refs.time.value = null;
      if (time > 3600) time = 3600;
      this.props.onSetCountdown(parseInt(time));
    }
  },
  render: function() {
    return (
      <div id="countdown-controls">
        <form ref="form" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="columns small-8 small-centered">
              <input id="form-time" type="text" ref="time" placeholder="Enter time in seconds..."/>
            </div>
            <div className="columns small-8 small-centered">
              <button id="form-btn-start" className="button expanded">Start</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
