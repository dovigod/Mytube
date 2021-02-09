import multer from 'multer';
import routes from './routes';

export const localsMiddleWare = (req, res, next) => {
	res.locals.siteName = 'JS tube';
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated: false,
		id: 1
	};

	next();
};

export const breakSecurityPolicy = (req, res, next) => {
	// res.setHeader("Content-Security-policy","* 'inline-eval';");

	return next();
};

const multerVideo = multer({ dest: 'uploads/videos/' });

export const uploadVideoMiddleware = multerVideo.single('videoFile');
