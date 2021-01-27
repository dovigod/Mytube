import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

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
app.get("/profile", handleProfile)
app.get("/",handleHome)


export default app;
