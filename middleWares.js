

import routes from "./routes";
import {videos} from "./db";
export const localsMiddleWare = (req, res ,next) => {

    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.videos = videos;
    next();

}