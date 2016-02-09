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

			spark.join(data.room_id);

			if(!RoomStore.hasParticipant(data.user, data.room_id)) {
				RoomStore.addParticipant(data.user, data.room_id);
			}

			var sparks = primus_dashboard.in(data.room_id).clients();

			sparks
					.forEach(function (spark_id) {
						primus_dashboard
								.spark(spark_id)
								.emit('update_room');
						primus_dashboard
								.spark(spark_id)
								.emit('update_rooms')
					})

		})

		spark.on('room_communication', function (data) {
			if(RoomStore.hasParticipant(data.user, data.room_id)) {
				RoomStore.logChat(data.user, data.room_id, data.msg);

				var sparks = primus_dashboard.in(data.room_id).clients();

				sparks
						.forEach(function (spark_id) {
							primus_dashboard
									.spark(spark_id)
									.emit('room_communication', {
										from: data.user,
										msg: data.msg
									})
						})
			}

		})

		spark.on('allow_user', function (data) {

			RoomStore.allowUser(data.user, data.participant, data.room_id);

			var sparks = primus_dashboard.in(data.room_id).clients();

			sparks
					.forEach(function (spark_id) {
						primus_dashboard
								.spark(spark_id)
								.emit('update_room')
					})

		})
	})

	var fs = require('fs');
	fs.writeFileSync('./public/scripts/lib/primus/primus.js', primus_dashboard.library());
	return primus_dashboard;
}