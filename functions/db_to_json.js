exports.version = "0.1.0";

exports.db_to_json = function(touser, note, result){

	for(i=0; i<result.rowCount; i++){
//takes result obtained from database and converts it into JSON.
	    		note[i] = {};
	    		note[i].title=result.rows[i].title.trim();
	    		note[i].author=result.rows[i].author.trim();
	    		note[i].description=result.rows[i].description.trim();
	    		}

	touser = JSON.stringify(note);
	return touser;

};