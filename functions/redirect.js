http = require('http');

exports.redirect = function(request, response){

	response.writeHead(302, {
  'Location': '../index.html'
  });
response.end();
}