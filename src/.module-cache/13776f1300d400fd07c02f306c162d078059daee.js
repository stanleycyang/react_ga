var HelloWorld = React.createClass({displayName: "HelloWorld",
	render: function(){
		return (
			React.createElement("div", null, 
				"Hello ", this.props.name
			)
		)
	}
});

React.render(React.createElement(HelloWorld, {name: "Stanley"}), document.getElementById('content'));

// Create a Timer

var Timer = React.createClass({displayName: "Timer",
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

	}
})