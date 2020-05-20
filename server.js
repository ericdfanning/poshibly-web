var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var fs = require('fs');

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

app.get('/sharing.png', function(req, res) {
	res.sendFile(path.join(__dirname, './sharing.png'))
})

app.get('/ChromeWebStore_Badge_v2_496x150.png', function(req, res) {
	res.sendFile(path.join(__dirname, './/ChromeWebStore_Badge_v2_496x150.png'))
})

app.get('/items', function(req, res) {

	fs.readFile('../../../../Desktop/openHAB-state.txt', 'utf8', function(err, data) {
	    if (err) throw err;
	    let body = '';
	    console.log('what is the data', JSON.parse(data).length)
	    let results = JSON.parse(data);
	    for (let i = 0; i < results.length; i++) {
	    	if (results[i].state !== 'NULL') {
	    		body += `<div><h2>${results[i].type}</h2><h4> Label: ${results[i].label}</h4><h5> Name: ${results[i].name}</h5>`
	    		if (results[i].groupNames.length > 0) {
	    			body += `<h6>group names: ${results[i].groupNames.reduce( (accum, item) => {
	    				return accum + `<span>${item}, </span>`
	    			}, '')}</h6>`
	    		}
	    		body += '</div>'
	    	}
	    }
  		res.status(200)
  		res.send(body)
	    // console.log('whats the data', Object.values(JSON.parse(data)));
	});
})


app.get('/sitemap', function(req, res) {

	fs.readFile('../../../../Desktop/curl_sitemaps.txt', 'utf8', function(err, data) {
	    if (err) throw err;
	    console.log('sitemap', typeof data, data)
		res.status(200)
		res.send(data)

	});

})
