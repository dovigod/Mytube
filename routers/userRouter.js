import express from 'express';
import routes from '../routes';

import { userDetail, editProfile, changePassword } from '../controllers/userController';

import { onlyPrivate } from '../middleWares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
// /:id recognize that edit-profile &change password is id so change the order

export default userRouter;
