'use strict';

/**
 * @author Avinash Verma
 *
 * Renders header of the Application
 * @example
 * <game-header></game-header> //it renders the header template
 *
 * @param N/A
 */
angular.module('gameTime.directives')
	.directive('gameHeader', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/header.html'
		}
	}]);