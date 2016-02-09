'use strict'

/**
 * @author Avinash Verma
 *
 * Governs routing in the App
 *
 * @example N/A
 * @param N/A
 */
angular.module('gameTime.routes')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
			.state('dashboard', {
				url: "/dashboard",
				templateUrl: 'views/pages/dashboard.html',
				controller: 'ctrl.dashboard'
			})
			.state('dashboard.rooms', {
				url: "/rooms",
				templateUrl: 'views/pages/rooms.html',
				controller: 'ctrl.dashboard.rooms'
			})
	}]);
