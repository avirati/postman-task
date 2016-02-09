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
				user: {}
			})

			//$scope methods
			angular.extend($scope, {
				register: function () {
					httpFactory.register({
								user: $scope.user.name
							})
							.success(function ( res ) {
								localStorage.setItem('login_data', JSON.stringify(res.data[0]));
								$scope.refreshUserData();
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
