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
			console.log('blahbla~~');
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

export const facebookLogIn = passport.authenticate('facebook');

export const facebookLoginCallback = async (ac, rf, profile, cb) => {
	const {
		_json: { id, email, name }
	} = profile;

	try {
		const user = await User.findById({ email });

		if (user) {
			user.facebookId = id;
			user.save();
			return cb(null, user);
		}

		const newUser = await User.create({
			email,
			name,
			facebookId: id,
			avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`
		});

		return cb(null, newUser);
	} catch (e) {
		return cb(e);
	}
};

export const postFacebookLogin = (req, res) => {
	res.redirect(routes.home);
};

export const getChangePassword = (req, res) => res.render('changePassword', { pageTitle: 'Change Password' });

export const postChangePassword = async (req, res) => {
	const {
		body: { oldPassword, newPassword, newPassword1 }
	} = req;
	try {
		if (newPassword !== newPassword1) {
			res.status(400);
			res.redirect(`/users/${routes.changePassword}`);
			return;
		}
		await req.user.changePassword(oldPassword, newPassword);
		res.redirect(routes.me);
	} catch (error) {
		res.status(400);
		res.redirect(`/users/${routes.changePassword}`);
	}
};

export const getEditProfile = (req, res) => {
	res.render('editProfile', {
		pageTitle: 'Edit Profile'
	});
};

export const postEditProfile = async (req, res) => {
	const {
		body: { name, email },
		file
	} = req;

	try {
		await User.findByIdAndUpdate(req.user.id, {
			name,
			email,
			avatarUrl: file ? file.path : req.user.avatarUrl
		});
		res.redirect(routes.me);
	} catch (error) {
		res.redirect(routes.editProfile);
	}
};

export const userDetail = async (req, res) => {
	const {
		params: { id }
	} = req;

	try {
		const user = await User.findById(id).populate('videos');

		res.render('userDetail', {
			pageTitle: 'User Detail',
			user
		});
	} catch (e) {
		res.redirect(routes.home);
		console(e);
	}
};

/*
{
  comments: [],
  videos: [ 60335e3d258b444d27e78d72 ],
  _id: 6031f1ad795c3b39e8f2c695,
  name: 'JS (Administrator)',
  email: 'inaki936@gmail.com',
  __v: 1,
  avatarUrl: 'uploads/avatars/47d9f2f52cb21924f79d7170de982c8b'
}
*/

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).populate('videos');
		res.render('userDetail', { pageTitle: 'User Detail', user });
	} catch (error) {
		res.redirect(routes.home);
	}
};
