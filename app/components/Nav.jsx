var React = require('react');
var {Link, IndexLink} = require('react-router');


// Refactored with arrow functions
// var Nav = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 			<h2>Nav Comp</h2>

// 			<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
			
// 			<IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</IndexLink>
			
// 			<IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
			
// 			</div>
// 		);
// 	}
// });

var Nav = () => {
	return (
			<div>
			<h2>Nav Comp</h2>

			<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
			
			<IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</IndexLink>
			
			<IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
			
			</div>
		);
};

module.exports = Nav;