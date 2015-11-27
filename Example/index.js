var contwidgetorUi = require('contwidgetor-ui');
var ReactDOM = require('react-dom');
var React = require('react');

var ContributionsGrid = contwidgetorUi.ContributionsGrid;
var NoContributionsGrid = contwidgetorUi.NoContributionsGrid;

$(document).ready(function() {
    ReactDOM.render(React.createElement(NoContributionsGrid),
      document.getElementById('react-content'));
});
