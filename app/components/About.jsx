var React = require('react');


// Example without '=>' functions... 
// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Comp</h3>
// 		);
// 	}
// });


// Stateless Functional Component (Refactored),
// Only on functions that don't maintain any state.
var About = (props) => {
		return (
			<h3>About Comp</h3>
		);
};

module.exports = About;