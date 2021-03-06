import express from 'express';
import routes from '../routes';

import {
	userDetail,
	getEditProfile,
	getChangePassword,
	postEditProfile,
	postChangePassword
} from '../controllers/userController';

import { onlyPrivate, uploadAvatar } from '../middleWares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
// /:id recognize that edit-profile &change password is id so change the order

export default userRouter;
