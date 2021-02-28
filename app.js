const express = require('express');
const app = express();
const path = require('path');
const api = require('./api/');

app.use(express.json());

app.listen(8080, () => {
	console.log('Running at Port 8080...');
});

// api
app.use('/api', api);

// routing
app.use('/', express.static(path.join(__dirname, 'public')));

// error
app.use((req, res) => {
	res.sendStatus(404);
});
