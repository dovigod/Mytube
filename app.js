import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleWare, breakSecurityPolicy} from "./middleWares";




const app = express()
app.use(helmet({contentSecurityPolicy: false,}));
app.set('view engine', "pug");
app.set("views",'./view');

app.use("/uploads", express.static("uploads"));

// dealing with only one server is nono
// and if we use this method, we could get attacked by uploading large file
//user.. like this created ones hould be seperate with server
//static files are usually logos for css .. frontend
//but not a good practice.. because problem happens when you update your code
// it is neccesarry because without, express will try to find directory with routers, buut it will never match.. so, by using express.static, it will skip everything and find it on given dir

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger("dev"));


app.use(localsMiddleWare);

app.use(breakSecurityPolicy);

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);




export default app;

