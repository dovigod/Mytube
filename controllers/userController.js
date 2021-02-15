import routes from '../routes';
import User from '../models/user';

export const getJoin = (req, res) => {
	res.render('join', {
		pageTitle: 'Join'
	});
};

export const postJoin = async (req, res) => {
	const { name, email, password , password2} = req.body;

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
		} catch (e) {
			console.log(e);
			res.redirect(routes.home);
		}
		res.redirect(routes.home);
	}

	res.render('join', {
		pageTitle: 'Join',
		name,
		password1: password,
		email,
		password2
	});
};

export const getLogin = (req, res) => {
	res.render('login', {
		pageTitle: 'Log In'
	});
};

export const postLogin = (req, res) => {
	//    const { body :{ email , password}} = req;
	// will compare with DB

	res.redirect(routes.home);
};

export const logout = (req, res) => res.redirect(routes.home);

export const changePassword = (req, res) => res.render('changePassword');

export const editProfile = (req, res) => {
	res.render('editProfile', {
		pageTitle: 'Edit Profile'
	});
};

export const userDetail = (req, res) => res.render('userDetail');
