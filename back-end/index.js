const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const randomWords = require('random-words');

app.get('/page', (req, res) => {
	res.json(randomWords({ min: 1, max: 1 }));
});

// ^ Needed so the url can be set to heroku's url
app.use(express.static(path.resolve(__dirname, '../frontEnd/build')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './frontEnd/build', 'index.html'));
});
app.use(bodyParser());
app.all('/*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	res.header(
		'Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE'
	);
	next();
});
// ^ Folder setup for heroku
app.listen(PORT, () => {
	console.log(`listening on ${PORT}!`);
});
