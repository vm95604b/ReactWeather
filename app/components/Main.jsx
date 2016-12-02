var React = require('react');
var Nav = require('Nav');

// Refactored with arrow functions
// var Main = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 			<Nav/>
// 			{this.props.children}
// 			</div>
// 		);
// 	}
// });

var Main = (props) => {
	return (
		<div>
		<Nav/>
		{props.children}
		</div>
	);
};

module.exports = Main;