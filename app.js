var express = require('express'),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		Book = require('./models/bookModel'),
		bookRouter = require('./Routes/bookRoutes')(Book);

var db = mongoose.connect('mongodb://localhost/bookAPI');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded( {
	extended: true
}));

app.use(bodyParser.json());

app.use('/api/books', bookRouter)

app.get('/', function(req, res) {
	res.send('The nodejs API');
});

app.listen(port, function() {
	console.log('Server listen on port ' + port);
});