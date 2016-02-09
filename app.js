var express = require('express'),
	config = require('./config/config'),
	router = express.Router();

_ = require('underscore');

var app = express();

require('./config/express')(app, config);
app.use('/', router);
require('./app/routes')(app, router);

app.listen(config.port, function () {
	console.log('Express server listening on port ' + config.port);
});

