import express from "express";
import routes from "../routes";
import {editVideo , videoDetail , deleteVideo , getUpload,postUpload,postEditVideo} from "../controllers/videoController";

import { uploadVideoMiddleware } from "../middleWares"


const videoRouter = express.Router();



videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideoMiddleware ,postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);


videoRouter.get(routes.editVideo(), editVideo);
videoRouter.post(routes.editVideo(), postEditVideo);


videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;