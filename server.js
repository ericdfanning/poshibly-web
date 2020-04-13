var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var port = 8000
app.set('port', port);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', port)
});

app.use('/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/css/styles.css'))
});

app.use(express.static(path.join(__dirname, './dist')));

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {

  res.status(200)
  res.send()
})

app.get('/main-menu.png', function(req, res) {
	res.sendFile(path.join(__dirname, './main-menu.png'))
})

app.get('/activelySharing.png', function(req, res) {
	res.sendFile(path.join(__dirname, './activelySharing.png'))
})