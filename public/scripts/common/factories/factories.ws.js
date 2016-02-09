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