import multer from 'multer';
import routes from './routes';

export const localsMiddleWare = (req, res, next) => {
	res.locals.siteName = 'JS tube';
	res.locals.routes = routes;
	res.locals.user = req.user || null;

	next();
};

export const breakSecurityPolicy = (req, res, next) => {
	// res.setHeader("Content-Security-policy","* 'inline-eval';");

	return next();
};

const multerVideo = multer({ dest: 'uploads/videos/' });

export const uploadVideoMiddleware = multerVideo.single('videoFile');

export const onlyPublic = (req, res, next) => {
	if (req.user) {
		res.redirect(routes.home);
	} else {
		next();
	}
};

export const onlyPrivate = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect(routes.home);
	}
};
