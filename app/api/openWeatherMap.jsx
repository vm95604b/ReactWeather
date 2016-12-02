var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=72286b89349f8ec8ef6d7ac9f5d39f4f&units=imperial';

// 72286b89349f8ec8ef6d7ac9f5d39f4f  ..(API KEY)..

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			debugger;
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (err) {
			throw new Error(err.response.data.message);

		//throw new Error('Unable to fetch weather.');
		});
	}
}