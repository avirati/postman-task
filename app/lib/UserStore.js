'use strict';

/**
 * @author Avinash Verma
 *
 * User store for the App, resets on server restart
 * @example N/A
 *
 * @param N/A
 * @param N/A
 */

var store = {},
	tokenGenerator = require('rand-token'),
	token;


exports.registerUser = function (user) {
	token = tokenGenerator.generate(16);
	store[user] = token;
	return token;
}

exports.deregisterUser = function (user, token) {
	if(store[user] === token) {
		delete store[user];
	}
}

exports.getUserByToken = function (token) {
	return _.invert(store)[token];
}

exports.getTokenByUser = function (user) {
	return store[user];
}

exports.hasUser = function (user) {
	return _.has(store, user);
}

exports.hasToken = function (token) {
	return _.has(_.invert(store), token);
}