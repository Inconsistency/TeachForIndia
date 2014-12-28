exports.version = "0.1.0";

http = require('http');

exports.redirect = function(request, response){
//redirect to home
	response.writeHead(302, {
  'Location': '../index.html'
  });
response.end();
}