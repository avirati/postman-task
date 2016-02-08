var express = require('express'),
	config = require('./config/config'),
	router = express.Router();

var app = express();

app.use('/', router);

require('./config/express')(app, config);
require('./app/routes')(app, router);

app.listen(config.port, function () {
	console.log('Express server listening on port ' + config.port);
});

