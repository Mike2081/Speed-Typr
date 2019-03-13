const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
// ^ Needed so the url can be set to heroku's url
const randomWords = require('random-words');
app.use(express.static(path.resolve(__dirname, '../front-end/back-end')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../front-end/back-end', 'index.html'));
});
// ^ Folder setup for heroku
app.use(bodyParser());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE");
  next();
});
app.get('/page', (req, res) =>{
    res.json(randomWords({min:1, max:1}));
  });
app.listen(PORT, () => {
  console.log(`listening on ${PORT}!`);
});