var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('The nodejs API');
});

app.listen(port, function() {
	console.log('Server listen on port ' + port);
});