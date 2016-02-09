'use strict'

var filterResponse = require('../lib/ResponseFilter'),
		UserStore = require('../lib/UserStore'),
		RoomStore = require('../lib/RoomStore'),
		user,
		room_id,
		response,
		error,
		token,
		data;

/**
 * @author Avinash Verma
 *
 * Registers a User for game
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.register = function (req, res) {
	user = req.body.user;

	if(!user) {
		error = new Error("Name can not be Empty !");
		response = filterResponse.failure(error, "Name can not be Empty !");
		res.status(400).json(response);
	}
	else {
		if(UserStore.hasUser(user)) {
			error = new Error("User name already taken !");
			response = filterResponse.failure(error, "User name already taken..");
			res.status(403).json(response);
		}
		else {
			token = UserStore.registerUser(user);
			data = [{
				token: token,
				user: user
			}]
			response = filterResponse.success(data, "Welcome " + user);
			res.status(201).json(response);
		}
	}
}


/**
 * @author Avinash Verma
 *
 * Deregisters a User
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.deregister = function (req, res) {
	user = req.body.user;
	token = req.body.token;

	if(!user || !token) {
		error = new Error("Local data is corrupted!");
		response = filterResponse.failure(error, "Local data is corrupted!");
		res.status(400).json(response);
	}
	else {
		if(UserStore.hasUser(user)) {
			UserStore.deregisterUser(user, token);
			response = filterResponse.success([], "Logged out successfully");
			res.status(200).json(response);
		}
		else {
			error = new Error("User not found");
			response = filterResponse.success([], "User not found with name " + user);
			res.status(400).json(response);
		}
	}
}

/**
 * @author Avinash Verma
 *
 * Returns all Rooms
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.allRooms = function (req, res) {
	response = filterResponse.success(RoomStore.allRooms(), "");
	res.status(200).json(response);
}

/**
 * @author Avinash Verma
 *
 * Creates a Room
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.createRoom = function (req, res) {
	token = req.headers['x-game-token'];
	user = UserStore.getUserByToken(token);
	RoomStore.createRoom(user);
	response = filterResponse.success([], "Room Created Successfully");
	res.status(200).json(response);
}

/**
 * @author Avinash Verma
 *
 * Deletes a Room
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.deleteRoom = function (req, res) {
	token = req.headers['x-game-token'];
	user = UserStore.getUserByToken(token);

	room_id = req.params.id;
	RoomStore.deleteRoom(user, room_id);
	response = filterResponse.success([], "Room Deleted Successfully");
	res.status(200).json(response);
}