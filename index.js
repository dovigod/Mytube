import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


// body parser is to if form is filled and sended to me, i need to send this form to server.. to do this, i want to get access to the requested data to manage. ==> body parser


//cookie parser ==> save user info in cookie to handle session

const app = express()
const port = 3000
const handleListening = () => {

    console.log(`Listening on: http://localhost:${port}"`)

}

const betweenHome = (req,res,next ) => {
    console.log("hello from my ass")

    next();
}

// i need to give permission to manage request  and to go next connection. therefore there is next parameter
const handleHome = (req, res) => {
    console.log('Hi from Home!')

    res.send("Hello from home!")

}
//


const killer = ( req, res, next) =>{
    res.send("Kill task");
    // middle ware can kill the connection by send method....
}


const handleProfile = (req,res) => {

    res.send("on the profile")

}


app.use(helmet(""));
app.use(logger("dev"));
app.use(betweenHome);
// use this middleware every website im entering
app.get("/profile", handleProfile)
app.get("/",handleHome)




app.listen(port, handleListening)

//npm install @babel/node  
// stage 0 -> experimental version
//
