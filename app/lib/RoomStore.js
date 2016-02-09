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
		players: []
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

exports.addParticipant = function (user, room_id) {
	store[room_id].players.push(user);
}

exports.removeParticipant = function (user, room_id) {
	participants = store[room_id].players;
	participants.splice(participants.indexOf(user));
}

exports.hasParticipant = function (user, room_id) {
	console.log(store, room_id)
	participants = store[room_id].players;
	return participants.indexOf(user) > -1;
}