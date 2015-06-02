var React = require('react');
var HelloWorld = require('./HelloWorld.react.js');
var Timer = require('./Timer.react.js');
var Wall = require('./Wall.react.js');

React.render(<HelloWorld name='Stanley' />, document.getElementById('content'));
// Create a Timer

React.render(<Timer />, document.getElementById('timer'));
React.render(<Wall />, document.getElementById('wall')); 



















