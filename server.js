const express = require('express');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const app = express();
const randomWords = require('random-words');
const path = require('path'); 
app.use(express.static(path.join(__dirname, 'App')));
app.use(bodyParser.urlencoded({
  extended: true
}));
//extended confi needs to be set to true because it has no default value
app.use(bodyParser.json());
// Must add cause heroku dissproves 'app.use(bodyParser.urlencoded)'. You must call the methods separately
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE");
  next();
});
app.get('/*', (req, res) =>{
    res.json(randomWords({min:1, max:1}));
  });
app.listen(process.env.PORT || 3000, function(){
    console.log('server runnning on http!');
  });
