'use strict'

/**
 * @author Avinash Verma
 *
 * WS Factory to govern all websocket related activities
 * @example N/A
 *
 */
angular.module('gameTime.factories')
	.factory('PrimusFactory', [ function () {
		var _primus;
		return {
			init: function ($scope, primus) {
				_primus = primus;
				_primus.id(function (id) {
					_primus.sparkId = id;
				})

				_primus.$on('close', function () {

				});

				_primus.$on('open', function () {

				});

				_primus.$on('update_rooms', function () {
					$scope.$broadcast('update_rooms');
				})

				_primus.$on('update_room', function () {
					$scope.$broadcast('update_room');
				})

				_primus.$on('room_communication', function (data) {
					$scope.$broadcast('room_communication', data);
				})
			},
			methods: {
				joinRoom: function (user, room_id) {
					_primus.emit('join_room', {
						user: user,
						room_id: room_id
					})
				},
				sendChat: function (user, msg, room_id) {
					_primus.emit('room_communication', {
						user: user,
						msg: msg,
						room_id: room_id
					})
				}
			}
		}
	}]);
