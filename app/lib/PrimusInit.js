var Primus = require('primus');

module.exports = function (server) {

	var primus_dashboard = new Primus(server, {
		transformer: 'browserchannel',
		pathname: '/game-time'
	});

	primus_dashboard.use('emit', require('primus-emit'));
	primus_dashboard.use('join', require('primus-rooms'));

	primus_dashboard.on('connection', function (spark) {
		spark.on('join_room', function (data) {

			if(!RoomStore.hasParticipant(data.user, data.room_id)) {
				spark.join(data.room_id);
				RoomStore.addParticipant(data.user, data.room_id);
			}

		})
	})

	var fs = require('fs');
	fs.writeFileSync('./public/scripts/lib/primus/primus.js', primus_dashboard.library());
	return primus_dashboard;
}