var HomeController = require('../controllers/HomeController');
var GameController = require('../controllers/GameController');

module.exports = function (app, router) {

	router.get('/', HomeController.renderHome);

	router.post('/register', GameController.register);
	router.post('/deregister', GameController.deregister);

}