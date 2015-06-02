var React = require('react');
var WallPost = require('./WallPost.react.js');
module.exports = React.createClass({
	getInitialState: function(){
		return {posts: [], text: ''};
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
    var number = this.state.posts.length + 1;
		var text = 'Add #' + number;
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
