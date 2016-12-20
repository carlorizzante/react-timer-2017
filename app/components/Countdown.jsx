const React = require("react");

const Clock = require("./Clock");

const Countdown = props => (
  <div id="timer">
    <Clock time={100}/>
  </div>
);

module.exports = Countdown;
