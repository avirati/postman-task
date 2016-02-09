'use strict';

/**
 * @author Avinash Verma
 *
 * Playground Controller
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */
angular.module('gameTime')
	.controller('ctrl.dashboard.playground', [
		'$scope',
		'$state',
		'$stateParams',
		'httpFactory',
		'PrimusFactory',

		function ( $scope, $state, $stateParams, httpFactory, PrimusFactory ) {

			//$scope variables
			angular.extend($scope, {

			})

			//$scope methods
			angular.extend($scope, {
				joinRoom: function () {
					PrimusFactory.methods.joinRoom($scope.login_data.user, $stateParams.roomId);
				},
				getRoom: function (id) {
					httpFactory.getRoom(id)
							.success(function ( res ) {
								$scope.currentRoom = res.data[0];
							})
							.error(function ( res ) {
								Materialize.toast(res.info, 4000);
							})
				},
				init: function () {
					$scope.joinRoom();

					$scope.$on('update_room', function () {
						$scope.getRoom($stateParams.roomId);
					})
				}
			})

			$scope.init();

		}]);
