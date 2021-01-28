import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";



const app = express()

app.set('view engine', "pug");
app.set("views",'./view');

// view engine default is undefined. so we must change it to pug

// by default it will look for the directory of + '/view' so if we want to change, use view method

//middle-wares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev"));

// routes


app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);
// exclusivly to handle router...




export default app;

