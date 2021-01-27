const express = require('express')
const app = express()
const port = 3000
const handleListening = () => {

    console.log(`Listening on: http://localhost:${port}"`)

}

const handleHome = (req, res) => {
    console.log('Hi from Home!')

    res.send("Hello from home!")

}

const handleProfile = (req,res) => {

    res.send("on the profile")

}

// if we want to use this as web server, we need to send html, css file..


// conclusion.. basic how it works, make server, make routes, answer.




app.get("/profile",handleProfile)



app.get("/",handleHome)
//in get method, usually calls two object, request, responce  == who and what kind of data sent,,  
app.listen(port, handleListening)