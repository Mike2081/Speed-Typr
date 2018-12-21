const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const wordsStuff = require('./wordsStuff');
app.use(express.static('public'));
app.use(bodyParser());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE");
  next();
});
app.get('/page', (req, res) =>{
    res.json(wordsStuff);
  });
  app.listen(8080, () => {
    console.log('server runnning!');
  });