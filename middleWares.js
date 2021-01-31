

import routes from "./routes";
import {videos} from "./db";
export const localsMiddleWare = (req, res ,next) => {

    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.videos = videos;
    res.locals.user = {
        isAuthenticated: false,
        id: 1
    }
    next();

}


export const breakSecurityPolicy = (req, res, next) => {

   // res.setHeader("Content-Security-policy","* 'inline-eval';");
    

    return next();
    
}