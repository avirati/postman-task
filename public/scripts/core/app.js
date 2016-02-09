'use strict';

angular.module('gameTime.directives', []);
angular.module('gameTime.services', []);
angular.module('gameTime.filters', []);
angular.module('gameTime.factories', []);
angular.module('gameTime.routes', ['ui.router']);
angular.module('gameTime.angular-materialize', ['ui.materialize']);

angular.module('gameTime', [
	'gameTime.directives',
	'gameTime.services',
	'gameTime.filters',
	'gameTime.factories',
	'gameTime.routes',
	'gameTime.angular-materialize',
	'primus',
]);

angular.module('gameTime')
		.config(['primusProvider', function (primusProvider) {
			var serverBaseUrl = location.port.length > 0 ? document.domain + ':' + location.port : document.domain;
			primusProvider
			// Define Primus endpoint.
			.setEndpoint(serverBaseUrl)
			// Define Primus options.
			.setOptions({
				reconnect: {
					'minDelay': 100,
					'maxDelay': 60000,
					'retries': 1000,
					'reconnect timeout': 2000,
					'factor': 1
				}
			})
			// Define default multiplex option for resources.
			.setDefaultMultiplex(false);
		}])