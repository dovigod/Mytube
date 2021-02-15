import multer from 'multer';
import routes from './routes';

export const localsMiddleWare = (req, res, next) => {
	res.locals.siteName = 'JS tube';
	res.locals.routes = routes;
	res.locals.user = req.user || {};
	

	//passport가 serialize, deserialize는 물론 request에도 유저 정보 올려줌


	next();
};

export const breakSecurityPolicy = (req, res, next) => {
	// res.setHeader("Content-Security-policy","* 'inline-eval';");

	return next();
};

const multerVideo = multer({ dest: 'uploads/videos/' });

export const uploadVideoMiddleware = multerVideo.single('videoFile');
