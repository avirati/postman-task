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

		return {
			init: function ($scope, primus) {

				primus.id(function (id) {
					primus.sparkId = id;
				})

				primus.$on('close', function () {

				});

				primus.$on('open', function () {

				});

				primus.$on('update_rooms', function () {
					$scope.$broadcast('update_rooms');
				})
			}
		}
	}]);
