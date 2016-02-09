'use strict';

/**
 * @author Avinash Verma
 *
 * Entry Point of the Application
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */
angular.module('gameTime')
	.controller('ctrl.main', [ '$scope', 'httpFactory', function ($scope, httpFactory) {
		window.scope = $scope;
		//$scope variables
		angular.extend($scope, {

		})

		//$scope methods
		angular.extend($scope, {
			isAuthenticated: function () {
				return localStorage.getItem('login_data') !== null;
			},
			refreshUserData: function () {
				$scope.login_data = localStorage.getItem('login_data') !== null ? JSON.parse(localStorage.getItem('login_data')) : undefined;
			},
			deregister: function () {
				httpFactory.deregister($scope.login_data)
						.success(function ( res ) {
							localStorage.removeItem('login_data');
							$scope.refreshUserData();
							Materialize.toast(res.info, 4000);
						})
						.error(function ( res ) {
							Materialize.toast(res.info, 4000);
						})
			},
			init: function () {
				$scope.refreshUserData();
			}
		})

		$scope.init();

	}]);
