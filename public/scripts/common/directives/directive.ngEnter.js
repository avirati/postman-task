'use strict'

/**
 * @author Avinash Verma
 *
 * Attached to an element as attribute, this will trigger if enter key is pressed while focus on the element
 * @example
 * <div ng-enter="doSomething()"></div>
 *
 *
 * @param {ngEnter} methodToCall: upon event trigger, methodToCall will be called
 *
 */
angular.module('gameTime.directives')
		.directive('ngEnter', [ function () {
			return function (scope, element, attrs) {
				element.bind("keydown keypress", function (event) {
					if (event.which === 13) {
						if (!event.shiftKey) {
							scope.$apply(function () {
								scope.$eval(attrs.ngEnter);
							});

							event.preventDefault();
						}
					}
				});
			};
		}]);
