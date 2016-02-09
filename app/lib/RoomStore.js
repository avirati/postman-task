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
	room;


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