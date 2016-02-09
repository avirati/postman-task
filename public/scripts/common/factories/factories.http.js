'use strict'

/**
 * @author Avinash Verma
 *
 * HTTP Factory to provide a reusable mean of calling APIs
 * @example
 * angular.module('myApp', [])
 *      .controller('ctrl.main', ['$scope', 'httpFactory', function($scope, httpFactory) {
 *          httpFactory.method()
 *              .success( function(_data_) {
 *                  console.log(_data_);
 *              })
 *              .error(function (_err_) {
 *                  console.log(_err_);
 *              })
 *      }])
 *
 *
 * @promise {success} triggers on success of API call
 * @promise {error} triggers on failure of API call
 *
 */
angular.module('gameTime.factories')
	.factory('httpFactory', ['$http', function ($http) {
		var httpFactory = {};

		httpFactory.enterGame = function (json) {
			return $http({
				method: 'POST',
				url: '/enter-game',
				data: json
			})
		}

		return httpFactory;
	}])
