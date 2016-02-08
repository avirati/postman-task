module.exports = function (app, router) {
	router.get('/', function (req, res, next) {
		res.render('index');
	});
}