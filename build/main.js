var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
				Hello {this.props.name}
			</div>
		)
	}
});

React.render(<HelloWorld name='Stanley' />, document.getElementById('content'));

// Create a Timer

var Timer = React.createClass({
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
			<div>Time spent here: {this.state.secondsElapsed}</div>
		);
	}
});

React.render(<Timer />, document.getElementById('timer'));




var WallPost = React.createClass({
	render: function(){
		var post = function(itemText, index){
			return <li key={index + itemText}>{itemText}</li>;
		};
		return <ul>{this.props.posts.map(post)}</ul>
	}
});

var Wall = React.createClass({
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
			<div>
				<h3>Wall</h3>
				<WallPost posts={this.state.posts} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>{text}</button>
				</form>
			</div>
		);
	}
});

React.render(<Wall />, document.getElementById('wall')); 



















