var express = require('express'),
	http = require('http'),
	pg = require('pg'),
	read = require('./functions/read_functions.js'),
	write = require('./functions/write_functions.js'),
	redirect = require('./functions/redirect.js');
	bodyParser = require('body-parser'),
	urlencodedParser = bodyParser.urlencoded({ extended: false });
	
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
app.use('/public', express.static(__dirname + '/public'));

app.post('/title/:title', read.read_by_title);
app.post('/author/:author', read.read_by_author);
app.put('/put', urlencodedParser, write.write_data);
app.post('/get', read.read_all);
app.post('*', read.generic);
app.get("*", redirect.redirect);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});