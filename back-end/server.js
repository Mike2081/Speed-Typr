const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const words = require('./words-array');
app.use(express.static('public'));
app.use(bodyParser());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE");
  next();
});
app.get('/words-array', (req, res) =>{
    res.json(words-array);
    console.log(words-array);
  });
  app.listen(8080, () => {
    console.log('server runnning!');
  });