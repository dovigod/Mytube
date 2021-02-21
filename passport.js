import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';
import routes from './routes';
import User from './models/user';
import { facebookLoginCallback, githubLoginCallBack } from './controllers/userController';
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

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FB_ID,
			clientSecret: keys.FB_SECRET,
			callbackURL: `https://gentle-bobcat-22.loca.lt/${routes.facebookCallBack}`,
			profileFields: ['id', 'displayName', 'photos', 'email'],
			scope: ['public-profile', 'email']
		},

		facebookLoginCallback
	)
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
