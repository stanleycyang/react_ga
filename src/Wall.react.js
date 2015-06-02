var React = require('react');
var WallPost = require('./WallPost.react.js');
module.exports = React.createClass({displayName: "exports",
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
