const express = require('express');
const port = process.env.PORT || 8080;
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
app.get('/*', (req, res) =>{
    res.json(randomWords({min:1, max:1}));
  });
app.listen(8080, () => {
    console.log('server runnning on port 8080!');
  });
app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('back-end/Front=end'));
}