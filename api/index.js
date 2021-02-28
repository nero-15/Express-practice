const express = require('express');
const router = express.Router();

router.get('/foo', (req, res) => {
	res.sendFile(__dirname + '/data.json', (err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			console.log('sending completed');
		}
	});
});

router.route('/bar')
	.get((req, res) => {
		res.json(req.query);
	})
	.post((req, res) => {
		const nameAry = ['id', 'name', 'address'],
			failed = nameAry.some(v => !req.body[v]);
		if (failed) {
			res.sendStatus(400);
		} else {
			res.sendStatus(200);
		}
	});

module.exports = router;
