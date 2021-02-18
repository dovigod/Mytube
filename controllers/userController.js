import passport from 'passport';
import routes from '../routes';
import User from '../models/user';

export const getJoin = (req, res) => {
	res.render('join', {
		pageTitle: 'Join'
	});
};

export const postJoin = async (req, res, next) => {
	const { name, email, password, password2 } = req.body;

	if (password !== password2) {
		res.status(400);
		res.render('join', { pageTitle: 'join' });
		//if wrong with verification,, make status code 400 bad request
	} else {
		try {
			const user = await User({
				name,
				email
			});
			await User.register(user, password);
			next();
		} catch (e) {
			console.log(e);
			res.redirect(routes.home);
		}
	}
};

export const getLogin = (req, res) => {
	res.render('login', {
		pageTitle: 'Log In'
	});
};

export const postLogin = passport.authenticate('local', {
	failureRedirect: routes.login,
	successRedirect: routes.home
});

export const githubLogin = passport.authenticate('github');

export const githubLoginCallBack = async (accessToken, refreshToken, profile, cb) => {
	const {
		_json: { name, id, avatar_url: avatarUrl, email }
	} = profile;

	try {
		const user = await User.findOne({ email });

		if (user) {
			user.githubId = id;

			return cb(null, user);
		} else {
			const newUser = await User.create({
				email,
				name,
				avatarUrl,
				githubId: id
			});

			return cb(null, newUser);
		}
	} catch (e) {
		return cb(e);
	}
	// 성공시 callback 저렇게 반환해야함
};

export const postGitHubLogIn = (req, res) => {
	res.redirect(routes.home);
};
// cb is provided by passport, which will announce us about success of call
export const logout = (req, res) => {
	req.logout();
	//passport handles it
	res.redirect(routes.home);
};

export const changePassword = (req, res) => res.render('changePassword');

export const editProfile = (req, res) => {
	res.render('editProfile', {
		pageTitle: 'Edit Profile'
	});
};

export const userDetail = (req, res) => res.render('userDetail');
