'use strict';

/**
 * @author Avinash Verma
 *
 * Room store for the App, resets on server restart
 * @example N/A
 *
 * @param N/A
 * @param N/A
 */

var store = {},
	tokenGenerator = require('rand-token'),
	token,
	room,
	participants;


exports.createRoom = function (user) {
	if(!user)
		return;

	token = tokenGenerator.generate(16);
	store[token] = {
		id: token,
		admin: user,
		players: [],
		chat_logs: []
	};
	return store[token];
}

exports.deleteRoom = function (user, room_id) {
	room = store[room_id];
	if(store[room_id].admin === user) {
		delete store[room_id];
	}
}

exports.allRooms = function () {
	return _.values(store);
}

exports.getRoomById = function (id) {
	return store[id];
}

exports.addParticipant = function (user, room_id) {
	store[room_id].players.push({
		user: user,
		allowed: function () {
			//allow admin by default
			return store[room_id].admin === user;
		}()
	});
}

exports.hasParticipant = function (user, room_id) {
	participants = store[room_id].players;
	var found = false;

	participants.map(function (participant) {
		if(participant.user === user)
			found = true;
	})

	return found;
}

exports.logChat = function (user, room_id, msg) {
	store[room_id].chat_logs.push({
		from: user,
		msg: msg
	})
}

exports.allowUser = function (user, participant, room_id) {
	if(user !== store[room_id].admin) {
		return;
	}
	store[room_id].players.map(function (o) {
		if(o.user === participant) {
			o.allowed = true;
		}
	})
}