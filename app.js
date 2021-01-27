import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {userRouter} from "./router";
/// name must be same

const app = express()



const handleHome = (req, res) => {
    console.log('Hi from Home!')

    res.send("Hello from home!")

}

const handleProfile = (req,res) => {

    res.send("on the profile")

}

//middle-wares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("dev"));

// routes

app.use("/user",userRouter);
// if somebody is getting to url, use route


export default app;
