const React = require("react");
const ReactDOM = require("react-dom");
const { Route, Router, IndexRoute, hashHistory, browserHistory } = require("react-router");

const Main = require("./components/Main");

// Load Foundation css
require("style!css!foundation-sites/dist/css/foundation.min.css");

// Start foundation
$(document).foundation();

// Load css
require("style!css!sass!appStyles");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById("app")
);
