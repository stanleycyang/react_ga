var React = require('react');
module.exports = React.createClass({
	render: function(){
		var post = function(itemText, index){
			return <li key={index + itemText}>{itemText}</li>;
		};
		return <ul>{this.props.posts.map(post)}</ul>
	}
});
