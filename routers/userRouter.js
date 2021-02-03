import express from "express";
import routes from "../routes";

import {users,userDetail,editProfile,changePassword} from "../controllers/userController";



const userRouter = express.Router();



userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword
);

userRouter.get(routes.userDetail(), userDetail);
// /:id recognize that edit-profile &change password is id so change the order

export default userRouter;
