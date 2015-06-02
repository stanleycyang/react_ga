var React = require('react');
module.exports = React.createClass({displayName: "exports",
	getInitialState: function(){
		return {secondsElapsed: 0}
	},
	tick: function(){
		this.setState({secondsElapsed: this.state.secondsElapsed + 1})
	},
	componentDidMount: function(){
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function(){
		clearInterval(this.interval);
	},
	render: function(){
		return (
			React.createElement("div", null, "Time spent here: ", this.state.secondsElapsed)
		);
	}
});
