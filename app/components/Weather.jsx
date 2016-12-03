var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
	getInitialState: function() {
		return{
			isLoading: false
		}
	},

	handleSearch: function(location) {
		var that = this;

		this.setState( {
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message,
				location: null,
				temp: null
			});
		});
	},

	render: function () {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMeassage () {
			if (isLoading) {
				return <h1 className='text-center'>Fetching Weather...</h1>
			}else if (temp && location) {
				return <Message temp={temp} location={location}/>
			}
		}
		function renderError () {
			if (typeof errorMessage === "string") {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className='text-center page-title'>Get Weather</h1>

				<WeatherForm onSearch={this.handleSearch}/>

				{renderMeassage()}

				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;