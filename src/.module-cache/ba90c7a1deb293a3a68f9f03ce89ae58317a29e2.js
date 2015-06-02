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
		return (
			React.createElement("div", null, "Time spent here: ", this.state.secondsElapsed)
		);
	}
});

React.render(React.createElement(Timer, null), document.getElementById('timer'));




var WallPost = React.createClass({displayName: "WallPost",
	render: function(){
		var post = function(itemText, index){
			return React.createElement("li", {key: index + itemText}, itemText);
		};
		return React.createElement("ul", null, this.props.posts.map(post))
	}
});

var Wall = React.createClass({displayName: "Wall",
	getInitialState: function(){
		return {posts: [], text: ''}
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var nextPosts = this.state.posts.concat([this.state.text]);
		var nextText = '';
		this.setState({posts: nextPosts, text: nextText});
	}, 
	render: function(){
		var text = 'Add #' + this.state.posts.length + 1;
		return (
			React.createElement("div", null, 
				React.createElement("h3", null, "Wall"), 
				React.createElement(WallPost, {posts: this.state.posts}), 
				React.createElement("form", {onSubmit: this.handleSubmit}, 
					React.createElement("input", {onChange: this.onChange, value: this.state.text}), 
					React.createElement("button", null, text)
				)
			)
		);
	}
});

React.render(React.createElement(Wall, null), document.getElementById('wall')); 



















