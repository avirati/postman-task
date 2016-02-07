'use strict'

/**
 * @author Avinash Verma
 *
 * Renders footer of the Application
 * @example
 * <game-footer></game-footer> //it renders the footer template
 *
 * @param N/A
 */
angular.module('gameTime.directives')
	.directive('gameFooter', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/footer.html'
		}
	}]);
