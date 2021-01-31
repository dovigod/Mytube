

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

const multerVideo = multer({dest : "upload/videos/"});
// the encoded url will be saved on dest

export const uploadVideoMiddleware = multerVideo.single('videoFile');
//only can upload one file at a time
// multer , returns file URL!!
//enctype ="multipart/form-data")
// since we are sending a file, the form encoding should be different