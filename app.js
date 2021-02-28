const express = require('express');
const app = express();
const path = require('path');
const api = require('./api/');
const request = require('request');

app.use(express.json());

app.listen(8080, () => {
	console.log('Running at Port 8080...');
});

// api
app.use('/api', api);

// routing
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/catImage/:width/:height', (req, res) => {
	// 送受信の設定
	const options = {
		url: 'http://placekitten.com/' + `${req.params.width}/${req.params.height}`,
		method: 'GET',
		encoding: null
	};

	request(options, (err, response, body) => {
		res.set('Content-Type', response.headers['content-type']);
		res.send(body);
	});
});


// error
app.use((req, res) => {
	res.sendStatus(404);
});
