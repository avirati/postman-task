'use strict'

var filterResponse = require('../lib/ResponseFilter'),
		name,
		response,
		error;

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
	var name = req.body.name;

	if(!name) {
		error = new Error("Name can not be Empty !");
		response = filterResponse.error(error, "Name can not be Empty !");
		res.status(400).json(response);
	}
	else {
		response = filterResponse.success([], "User Registration Success");
		res.status(201).json(response);
	}
}