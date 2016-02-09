var Primus = require('primus');

module.exports = function (server) {

	var primus_dashboard = new Primus(server, {
		transformer: 'browserchannel',
		pathname: '/game-time'
	});

	primus_dashboard.use('emit', require('primus-emit'))

	var fs = require('fs');
	fs.writeFileSync('./public/scripts/lib/primus/primus.js', primus_dashboard.library());
	return primus_dashboard;
}