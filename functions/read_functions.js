exports.version = "0.1.0";

var ddata = require('./db_to_json.js'),
	config = require('../config'),
	pg = require('pg'),
	conString = config.DATABASE_URL,
	table_name = config.TABLE_NAME;

exports.read_by_title = function(request, response){
//function to get data by title
	response.setHeader("Content-Type", "application/json");
	var touser = {};
	var note = [];

	pg.connect(conString, function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }
	  var a = request.params.title;
	  a = '%' + a + '%';
	  var q = "SELECT * FROM " + table_name + " WHERE title ilike $1;"
	  client.query( q, [a], function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }

	    touser = ddata.db_to_json(touser, note, result);
	    response.write(touser, 'utf-8');
		response.end();
	    
	  });
	});
}

exports.read_by_author = function(request, response){
//function to get data by title
	response.setHeader("Content-Type", "application/json");
	var touser = {};
	var note = [];

	pg.connect(conString, function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }

	  var a = request.params.author;
	  a = '%' + a + '%';
	  var q = "SELECT * FROM " + table_name + " WHERE author ilike $1;";
	  client.query( q, [a], function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }

	    touser = ddata.db_to_json(touser, note, result);
	    response.write(touser, 'utf-8');
		response.end();
	     
	  });
	});
}

exports.read_all = function(request, response){
//function to get all data
	response.setHeader("Content-Type", "application/json");
	var touser = {};
	var note = [];

	pg.connect(conString, function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }

	  q =  "SELECT * FROM " + table_name + ";";

	  client.query( q, function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }

	    touser = ddata.db_to_json(touser, note, result);
	    response.write(touser, 'utf-8');
		response.end();
	     
	  });
	});
}

exports.generic = function(request, response){
	//handle invalid post requests
	response.setHeader("Content-Type", "text/html");
	response.end("Nothing Doing");
}