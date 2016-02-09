'use strict'

/**
 * @author Avinash Verma
 *
 * Interceptor Factory to inject default headers
 * @example N/A
 *
 * @param {Promise}: $q
 * @param {Scope}: $rootScope
 *
 */
angular.module('gameTime.factories')
	.factory('myHttpInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {
		return {
			request: function (request) {
				if(localStorage.getItem('login_data') !== null)
					request.headers['X-Game-Token'] = JSON.parse(localStorage.getItem('login_data')).token;

				return request;
			}
		}
	}])

angular.module('gameTime.factories')
	.config([ '$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push('myHttpInterceptor');
	}]);
