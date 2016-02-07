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
	'gameTime.angular-materialize'
]);
