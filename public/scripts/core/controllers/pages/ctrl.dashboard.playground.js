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
		'httpFactory',
		function ( $scope, $state, httpFactory ) {

			//$scope variables
			angular.extend($scope, {

			})

			//$scope methods
			angular.extend($scope, {
				init: function () {

				}
			})

			$scope.init();

		}]);
