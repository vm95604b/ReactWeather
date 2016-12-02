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
			<div>

				<h1 className='text-center'>About</h1>
				
				<p>This is a weather application built with React.</p>

				<p>Here are some of the tools I used</p>

				<ul>
					<li>
						<a href='https://facebook.github.io/react'>React</a> - JavaScript framework used.
					</li>
					<li>
						<a href='https://openweathermap.org'>Open Weather Map</a> - Open Weather Map used to search for weather data by city name.
					</li>
				</ul>

			</div>
		);
};

module.exports = About;