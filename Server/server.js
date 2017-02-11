var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
//var models = require("./Database/models");

var app = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


app.use('/', require('./Routes/routes'));


// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});


// Start the server
app.set('port', port);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
