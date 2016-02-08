'use strict'

/**
 * @author Avinash Verma
 *
 * Renders the index view
 * @example N/A
 *
 * @param {Request} req: The Request Object
 * @param {Response} res: The Response Object
 */
exports.renderHome = function (req, res) {
	res.render('index');
}