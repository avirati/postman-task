'use strict';

/**
 * @author Avinash Verma
 *
 * Dashboard Controller
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */
angular.module('gameTime')
	.controller('ctrl.dashboard.rooms', [
		'$scope',
		'$state',
		'httpFactory',
		function ( $scope, $state, httpFactory ) {

			//$scope variables
			angular.extend($scope, {
				rooms: []
			})

			//$scope methods
			angular.extend($scope, {
				createRoom: function () {
					httpFactory.createRoom()
							.success(function ( res ) {
								Materialize.toast(res.info, 4000);
								$scope.getAllRooms();
							})
							.error(function ( res ) {
								Materialize.toast(res.info, 4000);
							})
				},
				getAllRooms: function () {
					httpFactory.getAllRooms()
							.success(function ( res ) {
								$scope.rooms = res.data;
							})
							.error(function ( res ) {
								Materialize.toast(res.info, 4000);
							})
				},
				deleteRoom: function (room_id) {
					httpFactory.deleteRoom(room_id)
							.success(function ( res ) {
								$scope.getAllRooms();
								Materialize.toast(res.info, 4000);
							})
							.error(function ( res ) {
								Materialize.toast(res.info, 4000);
							})
				},
				init: function () {
					$scope.getAllRooms();

					$scope.$on('update_rooms', function () {
						$scope.getAllRooms();
					})
				}
			})

			$scope.init();

		}]);
