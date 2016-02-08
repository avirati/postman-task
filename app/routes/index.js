var HomeController = require('../controllers/HomeController');
var GameController = require('../controllers/GameController');

module.exports = function (app, router) {

	router.get('/', HomeController.renderHome);

	router.post('/enter-game', GameController.enterGame);

}