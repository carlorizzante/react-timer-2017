const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");

const Main = require("./components/Main");
const Timer = require("./components/Timer");
const Countdown = require("./components/Countdown");
const About = require("./components/About");

// Load Foundation css
// require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById("app")
);
