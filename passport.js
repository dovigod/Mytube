import passport from 'passport';
import GithubStrategy from 'passport-github';
import routes from './routes';
import User from './models/user';
import { githubLoginCallBack } from './controllers/userController';
import keys from './keys';

passport.use(User.createStrategy());

passport.use(
	new GithubStrategy(
		{
			clientID: keys.GH_ID,
			clientSecret: keys.GH_SECRET,
			callbackURL: `http://localhost:4000/auth/github/callback`,
			redirect_uri: `http://localhost:4000/${routes.githubCallBack}`
		},

		githubLoginCallBack
	)
);
//1. press github button -> will leat to /auth/github
//2. start authentication (github)
//3. on strategy github, will use this
//4. on way back here, it will come to callbackurl, with user info
//5. on that url, we will passport.authenticate and execute githubLoginCallBack
//6. if login is successful and function returns ok. execute postgithublogin

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// send user to github
// github responce :: r u sure to give informations to this application
// yes
// github will send user back to us with information
