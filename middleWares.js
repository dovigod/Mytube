

import routes from "./routes";
import multer from "multer";

export const localsMiddleWare = (req, res ,next) => {

    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }


    next();

}


export const breakSecurityPolicy = (req, res, next) => {

   // res.setHeader("Content-Security-policy","* 'inline-eval';");
    

    return next();
    
}

const multerVideo = multer({dest : "uploads/videos/"});


export const uploadVideoMiddleware = multerVideo.single('videoFile');
