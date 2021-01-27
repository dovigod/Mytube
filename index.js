// const express = require('express')
// this is not sexy syntax...by babel, transform

import express from "express";

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





app.get("/profile",handleProfile)



app.get("/",handleHome)

app.listen(port, handleListening)

//npm install @babel/node  
// stage 0 -> experimental version
//
