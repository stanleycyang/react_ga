var React = require('react');
var HelloWorld = require('./HelloWorld.react.js');
var Timer = require('./Timer.react.js');
var Wall = require('./Wall.react.js');

React.render(React.createElement(HelloWorld, {name: "Stanley"}), document.getElementById('content'));
// Create a Timer

React.render(React.createElement(Timer, null), document.getElementById('timer'));
React.render(React.createElement(Wall, null), document.getElementById('wall')); 



















