exports.version = "0.1.0";

var pg = require('pg'),
	config = require('../config'),
	conString = config.DATABASE_URL,
	table_name = config.TABLE_NAME;

exports.write_data = function(request, response){
//function to enter new data
	response.setHeader("Content-Type", "application/json");

	if (!request.body) return res.sendStatus(400)

	var title = request.body.title;
	var author = request.body.author;
	var description = request.body.description;


	pg.connect(conString, function(err, client, done) {
	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }

	  q = "INSERT INTO " + table_name + "(title, author, description) VALUES ($1, $2, $3);";

		response.write("Success");
		response.end();

	  client.query( q, [title, author, description], function(err, result) {
	    //call `done()` to release the client back to the pool
	    done();

	    if(err) {
	      return console.error('error running query', err);
	    }
	    
	})
});
}