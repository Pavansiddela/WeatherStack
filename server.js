const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
	let city = req.query.city;
	var request = require('request');
	request(
		`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=b30ef2bd257cb9b6a3cf9fc16ae705c3`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
			}
		}
	);
});

app.listen(3000, () => console.log('Server started on port 3000'));