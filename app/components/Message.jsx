var React = require('react');

// Refactored with arrow functions
// var Message = React.createClass({
// 	render: function () {

// 		var {temp, location} = this.props;

// 		return (
// 			<div>
// 				<h1>It is {temp} in {location}</h1>
// 			</div>
// 		);
// 	}
// });


// Using built in ES6 destructuring syntax for props
var Message = ({temp, location}) => {

	return (
		<div>
			<h3 className='text-center'>It is {temp} in {location}</h3>
		</div>
	);
};

module.exports = Message;