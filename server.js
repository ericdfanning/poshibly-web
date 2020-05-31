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

app.use(express.static(path.join(__dirname, './build')));

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {

  res.status(200)
  res.send()
})

app.get('/poshibly-actively-sharing.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/poshibly-actively-sharing.png'))
})

app.get('/poshibly-dashboard-options-checked.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/poshibly-dashboard-options-checked.png'))
})

app.get('/poshibly-free-dashboard-activity-closed.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/poshibly-free-dashboard-activity-closed.png'))
})

app.get('/ChromeWebStore_BadgeWBorder_v2_206x58.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/ChromeWebStore_BadgeWBorder_v2_206x58.png'))
})

app.get('/ChromeWebStore_BadgeWBorder_v2_340x96.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/ChromeWebStore_BadgeWBorder_v2_340x96.png'))
})

app.get('/Poshibly_Icon.png', function(req, res) {
	res.sendFile(path.join(__dirname, './src/images/Poshibly_Icon.png'))
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
