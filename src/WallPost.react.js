var React = require('react');
module.exports = React.createClass({displayName: "exports",
	render: function(){
		var post = function(itemText, index){
			return React.createElement("li", {key: index + itemText}, itemText);
		};
		return React.createElement("ul", null, this.props.posts.map(post))
	}
});
