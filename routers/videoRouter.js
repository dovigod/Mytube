import express from 'express';
import routes from '../routes';
import {
	editVideo,
	videoDetail,
	deleteVideo,
	getUpload,
	postUpload,
	postEditVideo
} from '../controllers/videoController';

import { uploadVideoMiddleware, onlyPrivate } from '../middleWares';

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideoMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, editVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
