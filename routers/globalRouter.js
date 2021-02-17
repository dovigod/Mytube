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
	postGitHubLogIn
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
	passport.authenticate('github', { failureRedirect: routes.login }),
	postGitHubLogIn
);

export default globalRouter;
