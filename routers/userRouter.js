import express from "express";



export const userRouter = express.Router();



userRouter.get("/",(req,res) => res.send("user index"))

userRouter.get("/edit", (req,res) => res.send("hello from edit"));

userRouter.get("/password", (req,res) => res.send("hello from paswword"));



// to adopt MVC pattern ( Module , View ,control)
// data , how does data looks ,function

// need to separate URL with function

//module  ==> database

// view ==> template