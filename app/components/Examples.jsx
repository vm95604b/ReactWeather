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
		<h3>Examples Comp</h3>
	);
};

module.exports = Examples;