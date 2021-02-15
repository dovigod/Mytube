import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import logger from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
import { localsMiddleWare, breakSecurityPolicy } from './middleWares';
import './passport';

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.set('view engine', 'pug');
app.set('views', './view');

app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(
	session({
		secret: `${process.env.COOKIE_SECRET}`,
		resave: true,
		saveUninitialized: false,
		store: new CookieStore({ mongooseConnection: mongoose.connection })
		//give connection to mongo
	})
);

// by using session,, express is ready to handle cookie

//it deserialize cookie

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleWare);

app.use(breakSecurityPolicy);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
