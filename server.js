const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const randomWords = require('random-words');
app.use(express.static('public'));
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
app.listen(process.env.PORT || 5000, () => {
  console.log('server runnning!');
});