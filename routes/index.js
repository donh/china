/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'China 5' });
};

exports.home = function(req, res) {
	res.render('home', { title: 'Hello, Home!' });
};

exports.read = function(req, res) {
	res.render('read', { title: 'Hello, World!' });
};