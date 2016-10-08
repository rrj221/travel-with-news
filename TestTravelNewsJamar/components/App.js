var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Body = require('./Body');
var Footer = require('./Footer');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
