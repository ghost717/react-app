const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const path = require('path');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

/*
//listing plikow
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
app.use(bodyParser())
.use(express.static(__dirname + "/"))
.use('/temp', serveIndex(__dirname + '/temp', {'icons': true}));
*/
/*
app.engine('jade', require('jade').__express);
app.set('view engine','jade');
*/

app.use(
	cookieSession({
		maxAge: 30*24*60*60*1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);