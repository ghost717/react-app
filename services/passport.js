const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//https://console.developers.google.com/
passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id })
			.then((existingUser) => {
				if(existingUser){

					done(null, existingUser);
				} else {

					new User({ googleId : profile.id, name: profile.displayName })
						.save()
						.then(user => done(null, user));
				}
			});


		console.log('accessToken: ', accessToken);
		console.log('refreshToken: ', refreshToken);
		console.log('profile: ', profile);
	})
);
