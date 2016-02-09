var HomeController = require('../controllers/HomeController');
var GameController = require('../controllers/GameController');

module.exports = function (app, router) {

	router.get('/', HomeController.renderHome);
	router.get('/rooms', GameController.allRooms);
	router.get('/rooms/:id', GameController.getRoom);

	router.post('/register', GameController.register);
	router.post('/deregister', GameController.deregister);
	router.post('/create-room', GameController.createRoom);

	router.delete('/delete-room/:id', GameController.deleteRoom);

}