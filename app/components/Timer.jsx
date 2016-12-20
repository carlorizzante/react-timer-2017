const React = require("react");

const Clock = require("./Clock");

const Timer = props => (
  <div id="timer">
    <Clock time={65}/>
  </div>
);

module.exports = Timer;
