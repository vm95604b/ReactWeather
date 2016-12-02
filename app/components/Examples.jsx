var React = require('react');
var {Link} = require('react-router');

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
			<h1 className='text-center'>Examples</h1>
			
			<p>Here are a few example locations to try out:</p>

			<ol>
				<li>
					<Link to='/?location=New York'>New York, NY</Link>
				</li>
			  <li>
					<Link to='/?location=Phiadelphia'>Phiadelphia, PA</Link>
			  </li>
			</ol>
		</div>
	);
};

module.exports = Examples;