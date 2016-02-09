var express = require('express'),
	config = require('./config/config'),
	router = express.Router(),
	http = require('http');

_ = require('underscore');
UserStore = require('./app/lib/UserStore');
RoomStore = require('./app/lib/RoomStore');

var app = express();
var server = http.createServer(app);

require('./config/express')(app, config);
app.use('/', router);
require('./app/routes')(app, router);

//Initialize Primus
primus_dashboard = require('./app/lib/PrimusInit')(server);

server.listen(config.port, function () {
	console.log('Express server listening on port ' + config.port);
});

