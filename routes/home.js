/*
 * GET home page.
 */
exports.plan = function(req, res) {
	res.render('home', { title: 'Home' });
};