var React = require('react');


// Refactored with arrow functions
// var Examples = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>Examples Comp</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
		<h3>Examples Comp!</h3>
		<p>Welcome to Examples Page</p>
		</div>
	);
};

module.exports = Examples;