import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {userRouter} from "./routers/userRouter";
const app = express()



//middle-wares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev"));

// routes

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user",userRouter);



export default app;

