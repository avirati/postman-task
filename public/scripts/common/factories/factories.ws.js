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
			},
			methods: {
				joinRoom: function (user, room_id) {
					_primus.emit('join_room', {
						user: user,
						room_id: room_id
					})
				}
			}
		}
	}]);
