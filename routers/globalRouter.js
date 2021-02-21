import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { home, search } from '../controllers/videoController';
import {
	getJoin,
	postJoin,
	logout,
	getLogin,
	postLogin,
	githubLogin,
	postGitHubLogIn,
	getMe,
	facebookLogIn,
	facebookLoginCallback
} from '../controllers/userController';

import { onlyPublic, onlyPrivate } from '../middleWares';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
	routes.githubCallBack,
	passport.authenticate('github', { failureRedirect: '/login' }),
	postGitHubLogIn
);
globalRouter.get(routes.me, onlyPrivate, getMe);

globalRouter.get(routes.facebook, facebookLogIn); // send to facebook

globalRouter.get(
	routes.facebookCallBack,
	passport.authenticate('facebook', { failureRedirect: '/login' }),
	facebookLoginCallback
);

export default globalRouter;
