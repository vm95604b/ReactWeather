var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
	getInitialState: function() {
		return{
			isLoading: false
		}
	},

	handleSearch: function(location) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(errorMessage) {
			that.setState({
				isLoading: false,
				location: null,
				temp: null
			});
			alert('Could not find City.');
		});
	},

	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMeassage () {
			if (isLoading) {
				return <h3>Fetching Weather...</h3>
			}else if (temp && location) {
				return <Message temp={temp} location={location}/>
			}
		}

		return (
			<div>
			<h3>Weather Comp</h3>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMeassage()}
			</div>
		);
	}
});

module.exports = Weather;