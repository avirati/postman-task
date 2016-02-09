'use strict'

var filterResponse = require('../lib/ResponseFilter'),
		UserStore = require('../lib/UserStore'),
		name,
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
exports.enterGame = function (req, res) {
	name = req.body.name;

	if(!name) {
		error = new Error("Name can not be Empty !");
		response = filterResponse.failure(error, "Name can not be Empty !");
		res.status(400).json(response);
	}
	else {
		if(UserStore.hasUser(name)) {
			error = new Error("User name already taken !");
			response = filterResponse.failure(error, "User name already taken..");
			res.status(403).json(response);
		}
		else {
			token = UserStore.registerUser(name);
			data = [{
				token: token
			}]
			response = filterResponse.success(data, "Welcome " + name);
			res.status(201).json(response);
		}
	}
}