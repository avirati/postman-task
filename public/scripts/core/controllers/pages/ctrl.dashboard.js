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
	.controller('ctrl.dashboard', [
		'$scope',
		'httpFactory',
		function ( $scope, httpFactory ) {

			//$scope variables
			angular.extend($scope, {

			})

			//$scope methods
			angular.extend($scope, {
				enterGame: function () {
					httpFactory.enterGame({
						name: $scope.user_name
					})
					.success(function ( res ) {
						Materialize.toast(res.info, 4000);
					})
					.error(function ( res ) {
						Materialize.toast(res.info, 4000);
					})
				},
				init: function () {

				}
			})

			$scope.init();

		}]);
