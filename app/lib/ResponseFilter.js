'use strict'

/**
 * @author Avinash Verma
 *
 * Formats the success response in a way so that it is uniform across the App
 * @example N/A
 *
 * @param {Object} data: The data object that we want to send
 * @param {String} info: Any additional msg we want to send
 */

exports.success = function (data, info) {
	data = data || {};

	if(!(data instanceof Array)) {
		data = [data]
	}
	return {
		success: true,
		info: info || null,
		data: data,
		meta: {
			count: data.length
		}
	}
}

/**
 * @author Avinash Verma
 *
 * Formats the error response in a way so that it is uniform across the App
 * @example N/A
 *
 * @param {Error} error: The error object that we want to send
 * @param {String} info: Any additional msg we want to send
 */
exports.failure = function (error, info) {
	return {
		success: false,
		error: error,
		info: info || null,
		meta: {
			count: 0
		}
	}
}