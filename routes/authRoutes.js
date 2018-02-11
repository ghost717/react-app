const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback', 
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	/*
	app.get('/', (req, res) => {
		res.send(req.user);
	});

	app.get('/localApi', (req, res) => {
			//viewname can include or omit the filename extension
			res.render(__dirname + '/temp'); 
		
	});
*/
};