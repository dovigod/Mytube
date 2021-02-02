import express from "express";
import routes from "../routes";
import {editVideo , videoDetail , deleteVideo , getUpload,postUpload} from "../controllers/videoController";

import {uploadVideoMiddleware} from "../middleWares"


const videoRouter = express.Router();



videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideoMiddleware ,postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);


videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);



export default videoRouter;