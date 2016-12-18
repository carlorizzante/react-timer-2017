const React = require("react");
const { Link, IndexLink } = require("react-router");

const Nav = props => (
  <nav id="main-nav" className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="site-title"><IndexLink to="/">React Timer</IndexLink></li>
        <li><Link to="/timer" activeClassName="current">Timer</Link></li>
        <li><Link to="/countdown" activeClassName="current">Countdown</Link></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><Link to="/about" activeClassName="current">About</Link></li>
      </ul>
    </div>
  </nav>
);

module.exports = Nav;
